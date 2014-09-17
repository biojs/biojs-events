
event system
------------------

This wrapper here is for [`backbone-events-standalone`](https://www.npmjs.org/package/backbone-events-standalone) and thus the Backbone event system.

Guidelines
----------------

You can choose any library that supports the choosen syntax.

Please provide

```javascript
objs.on("name", function(data) {})
objs.off("name", function(data) {})
objs.once("name", function(data) {})
objs.trigger("name", function(data) {})
objs.onAll(function(eventName, data) {})   // (optional)
```


Here is a list of some popular libraries that offer this functionality:

* [Backbone](backbonejs.org)
* [Bean](https://github.com/fat/bean)
* [EventEmitter](https://github.com/Wolfy87/EventEmitter)
* [JS-signals](https://github.com/millermedeiros/js-signals)
* [MiniPubSub](https://github.com/neurodrone/MiniPubSub)
* [microevent.js](https://github.com/jeromeetienne/microevent.js)
* [atom](https://github.com/zynga/atom)
* [asEvented](https://github.com/mkuklis/asEvented)
* [Vine](https://github.com/arextar/Vine)
* [minivents](https://github.com/allouis/minivents)

Not all of them use the same method names or signatures. Please try to adapt those the signatures given above.



How to use
----------

### 1. install

```
npm install biojs-events --save
```

### 2. Mix the events capability with your object 

After the code of your BioJS component add the events capability by mixing you component prototype with the event class

```
require('biojs-events').mixin(my_component.prototype);
```

### 3. Trigger events

Now in your code you can use the events methods (trigger, off,on,once):

```
self.trigger('onSomethingChanged', {
 data : "some data"
});
```

and of course listen to your own events:

```
self.on('onSomethingChanged', function(data){
 console.log(data); // will print "some data"
});
```

