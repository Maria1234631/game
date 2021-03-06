import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import getClassName from '../../helpers/getClassName';
import Button from '../Button/Button';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

var File = function File(props) {
  var children = props.children,
      label = props.label,
      alignment = props.alignment,
      align = props.align,
      size = props.size,
      level = props.level,
      type = props.type,
      stretched = props.stretched,
      before = props.before,
      className = props.className,
      style = props.style,
      getRef = props.getRef,
      getRootRef = props.getRootRef,
      restProps = _objectWithoutProperties(props, ["children", "label", "alignment", "align", "size", "level", "type", "stretched", "before", "className", "style", "getRef", "getRootRef"]);

  var platform = usePlatform();
  return React.createElement(Button, {
    align: align || alignment,
    className: classNames(getClassName('File', platform), className),
    component: "label",
    type: type,
    stretched: stretched,
    level: level,
    size: size,
    before: before,
    style: style,
    getRootRef: getRootRef
  }, React.createElement("input", _extends({}, restProps, {
    className: "File__input",
    type: "file",
    ref: getRef
  })), children || label);
};

File.defaultProps = {
  label: 'Выберите файл',
  children: 'Выберите файл',
  alignment: 'left',
  align: 'left'
};
export default File;
//# sourceMappingURL=File.js.map