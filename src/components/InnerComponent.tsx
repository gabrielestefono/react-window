import React, { forwardRef, useContext } from "react";

import { VirtualTableContext } from "../context/VirtualTableContext";

export const InnerComponent = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
    function Inner({ children, ...rest }, ref) {
      const { header, footer, top } = useContext(VirtualTableContext);
      return (
        <div {...rest} ref={ref}>
          <table style={{ top, position: 'absolute', width: '100%' }}>
            {header}
            <tbody>{children}</tbody>
            {footer}
          </table>
        </div>
      );
    }
  );