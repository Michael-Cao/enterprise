<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [BULLET_DEFAULTS](#bullet_defaults)
-   [Bullet](#bullet)
    -   [init](#init)
    -   [updated](#updated)
    -   [destroy](#destroy)

## BULLET_DEFAULTS

**Properties**

-   `dataset` **[array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** The data to use in the chart.
-   `animate` **([boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) \| [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** true|false - will do or not do the animation.
    'initial' will do only first time the animation.
-   `tooltip` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Tooltip conetnts

## Bullet

A bullet graph is a variation of a bar graph developed by Stephen Few.
Seemingly inspired by the traditional thermometer charts and progress bars found in many
dashboards, the bullet graph serves as a replacement for dashboard gauges and meters.

**Parameters**

-   `element` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The plugin element for the constuctor
-   `settings` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The settings element.

### init

Do initialization, build up and / or add events ect.

Returns **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** The bullet chart prototype for chaining.

### updated

Handle updated settings and values.

Returns **\[type]** [description]

### destroy

Teardown - Remove added markup and events.

Returns **void** 