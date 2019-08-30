---
date: '2019-08-30'
title: 'Setting hitSlop with React Hooks'
path: '/posts/hitslop-hook'
tags: ['react-native', 'hooks']
---

Using great reusability of hooks to add auto hitSlop generation for all buttons and DRY.

Because human finger is less precise pointing device comparing to mouse or touchpad on mobile we have to make sure the touchable areas of our controls are at least 44dp (according to Apple HIG) or 48dp (according to Google Material Design guidelines).

React Native touchables provide a property called `hitSlop` which allows the component to be touched outside of its frame.

So when we have for example a small icon button of 20x20dp we can write the code like this:

```js
<IconButton
  source={Images.someSmallImage}
  hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
  onPress={this.handlePress}
/>
```

And we can notice that the hitSlop param is kind of verbose, because 99% of time we just want the touch area to grow to both sides, so as `IconButton` interface is under our control, we can improve it:

```js
<IconButton
  source={Images.someSmallImage}
  hitSlopSize={{ x: 24, y: 24 }}
  onPress={this.handlePress}
/>
```

Now what will happen when the size of the icon will change? Let’s say the UI designer will update the assets and run the script to export them to the `assets` folder of the app, then push the changes to `develop` branch, yeah, it is a really awesome designer. 🙂 Unless the export script doesn’t update the size of the image, and we take it into account, the `hitSlop` will be incorrect. And there are other ways how we can forget to update it.

Wouldn’t it be great if the size of the button will become our source of truth for the `hitSlop`? Because logically it is actually like that - whenever the size changes, the `hitSlop` will have to change. So we can use a bit of RN knowledge of View events  and write the component like this

```js
class IconButton extends React.Component {
  state = { frameSize: { x: 0, y: 0 } };

  onLayout = event => {
    const {
      nativeEvent: { layout }
    } = event;
    if (layout.width !== frameSize.x && layout.height !== frameSize.y) {
      this.setState({ frameSize: { x: layout.width, y: layout.height } });
    }
  };

  render({ source, onPress, ...otherProps }) {
    const { frameSize } = this.state;
    return (
      <TouchableOpacity
        onPress={onPress}
        hitSlop={getHitSlopForSize(frameSize)}
        {...otherProps}
      >
        <Image source={source} />
      </TouchableOpacity>
    );
  }
}
```

The mentioned  `getHitSlopForSize` function is quite a basic one, it just checks what extra size is needed and formats the result to what RN is expecting.

It was quite a basic component. But what will happen if we want to have the same functionality for other buttons of our app (or library)? Before React Hooks may be our choice was to make a HOC:

```js
function withHitSlop(Button) {
  return class WithHitSlop extends React.Component {

    state = { frameSize: { x: 0, y: 0 } };

    onLayout = event => {
      const {
        nativeEvent: { layout }
      } = event;
      if (layout.width !== frameSize.x && layout.height !== frameSize.y) {
        this.setState({ frameSize: { x: layout.width, y: layout.height } });
      }
    };

    render(props) {
      const { frameSize } = this.state;
      return (
        <Button
          hitSlop={getHitSlopForSize(frameSize)}
          onLayout={this.onLayout}
          {...props}
        />
      );
    }
  };
}
```

And this will allow us to write the component in a DRY manner:

```js
function IconButton({source, onPress, hitSlop, ...otherProps}) {
  return <TouchableOpacity onPress={onPress} hitSlop={hitSlop} {...otherProps}>
      <Image source={source}/>
    </TouchableOpacity>
}
export default withHitSlop(IconButton);
```

But using of HOC will bring all the issues of HOC that we know, like we will have to hoist the statics, to not forget the display name, inspection will suffer a bit etc.

And that’s the best case for the React Hooks, to bring a much cleaner solution for the cases when previously we used HOC or a render function.

The custom hook for the `hitSlop` will be quite simple:

```js
function useAutoHitSlop() {
  const [frameSize, setFrameSize] = React.useState({ x: 0, y: 0 });
  const onLayout = React.useCallback(
    event => {
      const {
        nativeEvent: { layout }
      } = event;
      if (layout.width !== frameSize.x && layout.height !== frameSize.y) {
        setFrameSize({ frameSize: { x: layout.width, y: layout.height } });
      }
    },
    [size]
  );
  return [getHitSlopForSize(frameSize), onLayout];
}
```

So the contract of `hitSlop` is like this:
- it will return a `hitSlop` provided that `onLayout` will be plugged in somewhere

And it’s not necessarily has to be `onLayout` prop of the touchable, maybe a button component has its own handler there, so hitSlop's `onLayout` can be called inside of it.

And the usage is quite nice and simple as well:

```js
function IconButton({ source, onPress, ...otherProps }) {
  const [hitSlop, onLayout] = useAutoHitSlop();
  return (
    <TouchableOpacity
      onPress={onPress}
      hitSlop={hitSlop}
      {...otherProps}
      onLayout={onLayout}
    >
      <Image source={source} />
    </TouchableOpacity>
  );
}
```

Testing hooks is an interesting topic by itself, because a hook can’t be called outside of React render code. The React Web part is better covered already. For React Native if we already use Jest and react-test-renderer we will need a function like the one in this pull request https://github.com/testing-library/react-testing-library/pull/274/files:

```js
import React from "react";
import renderer from "react-test-renderer";

function TestHook({ callback }) {
  callback();
  return null;
}

export function testHook(callback) {
  renderer.create(<TestHook callback={callback} />);
}
```

And with the help of this function we can test / describe `useAutHitSlop` hook like this:

```js
it("should not return hit slop when component is big (>= 44dp)", () => {
  let hitSlop, onLayout;
  testHook(() => {
    [hitSlop, onLayout] = useAutoHitSlop();
  });
  act(
    onLayout({ nativeEvent: { layout: { x: 0, y: 0, width: 44, height: 44 } } })
  );
  expect(hitSlop).toBeUndefined();
});

it("should not return hit slop when the size is unknown", () => {
  let hitSlop;
  testHook(() => {
    [hitSlop] = useAutoHitSlop();
  });
  expect(hitSlop).toBeUndefined();
});

it("should return hit slop when the size is small (< 44dp)", () => {
  let hitSlop, onLayout;
  testHook(() => {
    [hitSlop, onLayout] = useAutoHitSlop();
  });
  act(
    onLayout({ nativeEvent: { layout: { x: 0, y: 0, width: 10, height: 20 } } })
  );
  expect(hitSlop).toEqual({ top: 12, bottom: 12, left: 17, right: 17 });
});
```

And that's basically it.