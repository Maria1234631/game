import { FunctionComponent } from 'react';
import { ButtonProps } from '../Button/Button';
import { HasRef } from '../../types/props';
export interface FileProps extends ButtonProps, HasRef<HTMLInputElement> {
    /**
     * @deprecated Используйте `children`. Свойство `label` будет удалено в 3.0.0
     */
    label: ButtonProps['children'];
    /**
     * @deprecated Используйте `align`. Свойство `alignment` будет удалено в 3.0.0
     */
    alignment: ButtonProps['align'];
}
declare const File: FunctionComponent<FileProps>;
export default File;
