/**
 * 1)ReactNode
 * this can be given as type to children prop.
 * this is also used as return type of Functional Components
 * this is union of some types where JSX elements are represented by ReactElement
 */

/**
 * 2)ReactElement
 * 
 *  interface ReactElement<
        P = any,
        T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>,
    > {
        type: T;
        props: P;
        key: string | null;
    }
 * 
 * This represents the the JSXElement(Converted Object form of JSX element) both built in as well
 * as custom.
 *  
 * this is used in 
 *  a)to represent JSX element in reactNode type
 *  b)Function component types has return type of JSX.Element. JSX Element extends this interface
 *  only
 * 
 * it accepts 2 generics type which are for prototype and componentType.
 *
 * propType can be any
 * componentType is Union of string and JSXElementConstructor. string is for built in HtmlElement
 * props.
 */

/**
 * 3)JSXElementConstructor<P>
 *
 * In Object form of JSXElement, this is used as type of type property.
 *
 * This is union of FunctionComponent type and Class Component Type.propTYpes is passed as
 * generics for this
 *
 * Functional Component is function which accepts argument of proptype and returns ReactNode
 * Class Component is Function which will be called in constructor mode, with props and returns
 *  Component<any, any>
 */

/**
 * 4)Component
 *
 * This is return type of Class Component type. it accepts 3 generics. first 2 are propType and
 *  stateType.
 *
 * There is interface of this name which has all lifeCycle methods defined.
 * then there is class defined with this name which is used in defining your custom class component - class Foo extends React.Component
 *  This class has fields like props, state,setState, static ContextType.
 * Because of declaration merging these 2 types are combined
 */

/**
 * 5)PropsWithChildren<PropType>
 *
 * Used to define prop type of component. children property with reactNode is already defined.
 * Rest types are defined by generic
 */

/**
 * 6)FC
 *
 * This is alternative to define type of Functional Component.
 * This is one of the union types defined in JSXElementConstructor.It has some additional types also
 *
 * JSXElementConstructor defined both functional as well as class components.
 */

/**
 * 7)ComponentProps<ComponentType>
 * ComponentPropsWithRef<ComponentType>
 * ComponentPropsWithoutRef<ComponentType>
 *
 * returns the prop types for given component. primarily used to get prop types of built in html elements
 *  div, button and a
 *
 * used in Section4/code2/src/components/input lecture 51
 */

/**
 * 8)ElementType - value should be some valid identifier of a component
 *
 *    * <button></button>
 *
 * Here button is identifier.value can be inbuilt component as well as your Custom Component.
 * If you are using it as Identifier for Custom Component,then in order to use it as JSX element,
 * it should have capital letters.
 *
 * used in section 4. code2/src/components/Container.tsx
 */