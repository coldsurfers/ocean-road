/**
 * Do not edit directly
 * Generated on Fri, 01 May 2026 00:52:10 GMT
 */

export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  color: {
    background: {
      '1': DesignToken;
      '2': DesignToken;
      '3': DesignToken;
      '4': DesignToken;
      '5': DesignToken;
    };
    foreground: {
      '1': DesignToken;
      '2': DesignToken;
      '3': DesignToken;
      '4': DesignToken;
    };
    border: {
      '1': DesignToken;
      '2': DesignToken;
    };
    dimmed: {
      '1': DesignToken;
    };
  };
};
