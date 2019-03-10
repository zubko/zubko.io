import Typography from 'typography';
import FairyGates from 'typography-theme-fairy-gates';

FairyGates.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
});

delete FairyGates.googleFonts;
FairyGates.baseLineHeight = 1.618;
FairyGates.scaleRatio = 1.618;

const typography = new Typography(FairyGates);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
