import { useMemo } from "react";
import cx from "classnames";

import { isMobileUp } from "hooks/useResponsive";

import "./styles.scss";

export const TwoColumnsGrid = ({
  children,
  templateColumns,
  reverseMobile = false,
}) => {
  const isTablet = isMobileUp();

  const grid = useMemo(
    () => (isTablet ? "1fr" : templateColumns),
    [isTablet, templateColumns]
  );

  const className = useMemo(() => {
    const classname = "two-columns-grid-container";
    return cx(classname, {
      [`${classname}-reversed`]: isTablet && reverseMobile,
    });
  }, [isTablet, reverseMobile]);

  return (
    <div className={className} style={{ gridTemplateColumns: grid }}>
      {children.length && (
        <>
          <div className="first-column">{children[0] && children[0]}</div>
          <div className="second-column">{children[1] && children[1]}</div>
        </>
      )}

      {!children?.length && (
        <>
          <div className="first-column">{children}</div>
          <div className="second-column" />
        </>
      )}
    </div>
  );
};
