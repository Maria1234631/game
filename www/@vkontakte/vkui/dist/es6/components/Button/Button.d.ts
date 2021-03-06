import React from 'react';
import { HasChildren, HasRootRef } from '../../types/props';
export interface ButtonProps extends React.HTMLAttributes<HTMLElement>, HasChildren, HasRootRef<HTMLElement> {
    /**
     * Значения `1`, `2`, `3`, `sell`, `buy` устарели. Маппинг на новые значения находится в
     * статическом методе `Button.mapOldLevel(level)`. Старые значения будут удалены в 3.0.0
     */
    level?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'commerce' | 'destructive' | '1' | '2' | '3' | 'sell' | 'buy';
    size?: 'm' | 'l' | 'xl';
    /**
     * @deprecated Кнопки-ячейки `<Button type="cell" />` переехали в отдельный компонент: `<CellButton />`.
     * Свойство `type` будет удалено в 3.0.0
     */
    type?: 'default' | 'cell';
    align?: 'left' | 'center' | 'right';
    stretched?: boolean;
    before?: React.ReactNode;
    after?: React.ReactNode;
    component?: string | React.ComponentType;
    stopPropagation?: boolean;
}
declare const Button: React.FunctionComponent<ButtonProps>;
export default Button;
