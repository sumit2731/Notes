/**
 * Instead of adding and removing whole HTML elements, we can toggle their visibility using CSS.
 *
 * Comparing approaches
 * From a usability perspective, it doesn't make any difference. Elements hidden with display:
 *   none are functionally removed from the page. This is true visually, and it's also true in
 *   terms of keyboard navigation and screen-reader support.
 */

/**
 * There are some interesting performance differences, though.
 *
 *  DOM nodes consume memory just by existing, and that memory will be consumed whether or not
 *      they're visible to the user. In a large application with lots of DOM nodes, it can be
 *      beneficial to use conditional rendering, to reduce the number of DOM nodes at any given
 *      time, and lower the amount of memory consumed.
 *
 * On the other hand, adding a brand-new DOM node to the page is a much slower task than toggling
 *  a CSS property. If the user is toggling the content on and off (eg. expanding an accordion
 *  menu), it could be faster to use the display property.
 * 
 * 
 * That said, in most cases, the differences are so small that it doesn't really matter.

Here's what I suggest: use conditional rendering by default. Test your applications on low-end 
devices. If you notice that a particular transition feels laggy, experiment with alternative 
approaches to see if you can improve the experience.

This is one of those situations where it's very easy to fall into the “premature optimization”
trap. Watch out for it!
 */

{
  !!profile.badges && (
    <ul>
      {profile.badges.map((badge) => (
        <li>{badge}</li>
      ))}
    </ul>
  );
}
