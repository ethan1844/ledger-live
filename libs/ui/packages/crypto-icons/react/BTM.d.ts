/// <reference types="react" />
declare type Props = {
    size?: number | string;
    color?: string;
};
declare function BTM({ size, color }: Props): JSX.Element;
declare namespace BTM {
    var DefaultColor: string;
}
export default BTM;
