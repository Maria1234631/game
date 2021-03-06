import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { HasChildren, HasInsets, HasPlatform, HasRootRef } from '../../types/props';
export interface FixedLayoutProps extends HTMLAttributes<HTMLDivElement>, HasChildren, HasRootRef<HTMLDivElement>, HasInsets, HasPlatform {
    vertical?: 'top' | 'bottom';
}
export interface FixedLayoutState {
    position: 'absolute' | null;
    top: number;
}
declare class FixedLayout extends React.Component<FixedLayoutProps, FixedLayoutState> {
    state: {
        position: any;
        top: any;
    };
    el: HTMLDivElement;
    static contextTypes: {
        panel: PropTypes.Requireable<string>;
        document: PropTypes.Requireable<any>;
        hasTabbar: PropTypes.Requireable<boolean>;
    };
    readonly document: any;
    componentDidMount(): void;
    componentWillUnmount(): void;
    onViewTransitionStart: (e: any) => void;
    onViewTransitionEnd: () => void;
    getRef: (element: any) => void;
    render(): JSX.Element;
}
declare const _default: typeof FixedLayout;
export default _default;
