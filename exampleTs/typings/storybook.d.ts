declare module "@storybook/addon-actions" {
  export function action(name: string, ...params: any[]): any;
}
declare module '@storybook/addon-links' {
  import * as React from 'react';

  function linkTo<T>(book: string, kind?: string): React.MouseEventHandler<T>;
}

declare module '@storybook/addon-info'