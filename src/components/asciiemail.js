import * as React from 'react';

const style = {
  fontFamily: 'Monospace',
  fontWeight: 'bold',
  fontSize: '8px',
  backgroundColor: 'black',
  color: 'yellow',
  whiteSpace: 'pre',
};

const SIGNATURE = `          _                                             _       _                      _
         | |                    ____                   | |     | |                    (_)
   __ _  | |   ___  __  __     / __ \\     ____  _   _  | |__   | | __   ___            _    ___
  / _' | | |  / _ \\ \\ \\/ /    / / _\\ |   |_  / | | | | | '_ \\  | |/ /  / _ \\          | |  / _ \\
 | (_| | | | |  __/  >  <    | | (_| |    / /  | |_| | | |_) | |   <  | (_) |    _    | | | (_) |
  \\__,_| |_|  \\___| /_/\\_\\    \\ \\__,_|   /___|  \\__,_| |_.__/  |_|\\_\\  \\___/    (_)   |_|  \\___/
                               \\____/
`;

export default () => <pre css={style}>{SIGNATURE}</pre>;
