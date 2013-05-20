Ext.data.JsonP.Ext_data_validations({"tagname":"class","html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.Base' rel='Ext.Base' class='docClass'>Ext.Base</a><div class='subclass '><strong>Ext.data.validations</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/validations.html#Ext-data-validations' target='_blank'>validations.js</a></div></pre><div class='doc-contents'><p>This singleton contains a set of validation functions that can be used to validate any type of data. They are most\noften used in <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Models</a>, where they are automatically set up and executed.</p>\n</div><div class='members'><div id='m-property'><div class='definedBy'>Defined By</div><h3 class='members-title'>Properties</h3><div class='subsection'><div id='property-emailMessage' class='member first-child not-inherited'><a href='#' class='side not-expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.validations' rel='Ext.data.validations' class='definedIn docClass'>Ext.data.validations</a><br/><a href='source/validations.html#Ext-data-validations-property-emailMessage' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.validations-property-emailMessage' class='name not-expandable'>emailMessage</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The default error message used when an email validation fails</p>\n</div><div class='long'><p>The default error message used when an email validation fails</p>\n</div></div></div><div id='property-emailRe' class='member  not-inherited'><a href='#' class='side not-expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.validations' rel='Ext.data.validations' class='definedIn docClass'>Ext.data.validations</a><br/><a href='source/validations.html#Ext-data-validations-property-emailRe' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.validations-property-emailRe' class='name not-expandable'>emailRe</a><span> : <a href=\"#!/api/RegExp\" rel=\"RegExp\" class=\"docClass\">RegExp</a></span></div><div class='description'><div class='short'><p>The regular expression used to validate email addresses</p>\n</div><div class='long'><p>The regular expression used to validate email addresses</p>\n</div></div></div><div id='property-exclusionMessage' class='member  not-inherited'><a href='#' class='side not-expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.validations' rel='Ext.data.validations' class='definedIn docClass'>Ext.data.validations</a><br/><a href='source/validations.html#Ext-data-validations-property-exclusionMessage' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.validations-property-exclusionMessage' class='name not-expandable'>exclusionMessage</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The default error message used when an exclusion validation fails.</p>\n</div><div class='long'><p>The default error message used when an exclusion validation fails.</p>\n</div></div></div><div id='property-formatMessage' class='member  not-inherited'><a href='#' class='side not-expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.validations' rel='Ext.data.validations' class='definedIn docClass'>Ext.data.validations</a><br/><a href='source/validations.html#Ext-data-validations-property-formatMessage' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.validations-property-formatMessage' class='name not-expandable'>formatMessage</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'><p>The default error message used when a format validation fails.</p>\n</div><div class='long'><p>The default error message used when a format validation fails.</p>\n</div></div></div><div id='property-inclusionMessage' class='member  not-inherited'><a href='#' class='side not-expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.validations' rel='Ext.data.validations' class='definedIn docClass'>Ext.data.validations</a><br/><a href='source/validations.html#Ext-data-validations-property-inclusionMessage' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.validations-property-inclusionMessage' class='name not-expandable'>inclusionMessage</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The default error message used when an inclusion validation fails.</p>\n</div><div class='long'><p>The default error message used when an inclusion validation fails.</p>\n</div></div></div><div id='property-lengthMessage' class='member  not-inherited'><a href='#' class='side not-expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.validations' rel='Ext.data.validations' class='definedIn docClass'>Ext.data.validations</a><br/><a href='source/validations.html#Ext-data-validations-property-lengthMessage' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.validations-property-lengthMessage' class='name not-expandable'>lengthMessage</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The default error message used when a length validation fails.</p>\n</div><div class='long'><p>The default error message used when a length validation fails.</p>\n</div></div></div><div id='property-presenceMessage' class='member  not-inherited'><a href='#' class='side not-expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.validations' rel='Ext.data.validations' class='definedIn docClass'>Ext.data.validations</a><br/><a href='source/validations.html#Ext-data-validations-property-presenceMessage' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.validations-property-presenceMessage' class='name not-expandable'>presenceMessage</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The default error message used when a presence validation fails.</p>\n</div><div class='long'><p>The default error message used when a presence validation fails.</p>\n</div></div></div><div id='property-self' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-property-self' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-property-self' class='name expandable'>self</a><span> : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><strong class='protected-signature'>protected</strong></div><div class='description'><div class='short'>Get the reference to the current class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependent on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n</div></div></div></div></div><div id='m-method'><div class='definedBy'>Defined By</div><h3 class='members-title'>Methods</h3><div class='subsection'><div id='method-callOverridden' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-method-callOverridden' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-method-callOverridden' class='name expandable'>callOverridden</a>( <span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments args</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='protected-signature'>protected</strong></div><div class='description'><div class='short'>Call the original method that was previously overridden with override\n\nExt.define('My.Cat', {\n    constructor: functi...</div><div class='long'><p>Call the original method that was previously overridden with <a href=\"#!/api/Ext.Base-static-method-override\" rel=\"Ext.Base-static-method-override\" class=\"docClass\">override</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments<div class='sub-desc'><p>The arguments, either an array or the <code>arguments</code> object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>Returns the result after calling the overridden method</p>\n</div></li></ul></div></div></div><div id='method-callParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-method-callParent' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-method-callParent' class='name expandable'>callParent</a>( <span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments args</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='protected-signature'>protected</strong></div><div class='description'><div class='short'>Call the parent's overridden method. ...</div><div class='long'><p>Call the parent's overridden method. For example:</p>\n\n<pre><code>Ext.define('My.own.A', {\n    constructor: function(test) {\n        alert(test);\n    }\n});\n\nExt.define('My.own.B', {\n    extend: 'My.own.A',\n\n    constructor: function(test) {\n        alert(test);\n\n        this.callParent([test + 1]);\n    }\n});\n\nExt.define('My.own.C', {\n    extend: 'My.own.B',\n\n    constructor: function() {\n        alert(\"Going to call parent's overriden constructor...\");\n\n        this.callParent(arguments);\n    }\n});\n\nvar a = new My.own.A(1); // alerts '1'\nvar b = new My.own.B(1); // alerts '1', then alerts '2'\nvar c = new My.own.C(2); // alerts \"Going to call parent's overriden constructor...\"\n                         // alerts '2', then alerts '3'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments<div class='sub-desc'><p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>Returns the result from the superclass' method</p>\n</div></li></ul></div></div></div><div id='method-email' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.validations' rel='Ext.data.validations' class='definedIn docClass'>Ext.data.validations</a><br/><a href='source/validations.html#Ext-data-validations-method-email' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.validations-method-email' class='name expandable'>email</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> email</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>Validates that an email string is in the correct format ...</div><div class='long'><p>Validates that an email string is in the correct format</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Config object</p>\n</div></li><li><span class='pre'>email</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The email address</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>True if the value passes validation</p>\n</div></li></ul></div></div></div><div id='method-exclusion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.validations' rel='Ext.data.validations' class='definedIn docClass'>Ext.data.validations</a><br/><a href='source/validations.html#Ext-data-validations-method-exclusion' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.validations-method-exclusion' class='name expandable'>exclusion</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> value</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>Validates that the given value is present in the configured list. ...</div><div class='long'><p>Validates that the given value is present in the configured <code>list</code>.\nFor example:</p>\n\n<pre><code>validations: [{type: 'exclusion', field: 'username', list: ['Admin', 'Operator']}]\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Config object</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The value to validate</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>True if the value is not present in the list</p>\n</div></li></ul></div></div></div><div id='method-format' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.validations' rel='Ext.data.validations' class='definedIn docClass'>Ext.data.validations</a><br/><a href='source/validations.html#Ext-data-validations-method-format' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.validations-method-format' class='name expandable'>format</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> value</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>Returns true if the given value passes validation against the configured matcher regex. ...</div><div class='long'><p>Returns true if the given value passes validation against the configured <code>matcher</code> regex.\nFor example:</p>\n\n<pre><code>validations: [{type: 'format', field: 'username', matcher: /([a-z]+)[0-9]{2,3}/}]\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Config object</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The value to validate</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>True if the value passes the format validation</p>\n</div></li></ul></div></div></div><div id='method-inclusion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.validations' rel='Ext.data.validations' class='definedIn docClass'>Ext.data.validations</a><br/><a href='source/validations.html#Ext-data-validations-method-inclusion' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.validations-method-inclusion' class='name expandable'>inclusion</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> value</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>Validates that the given value is present in the configured list. ...</div><div class='long'><p>Validates that the given value is present in the configured <code>list</code>.\nFor example:</p>\n\n<pre><code>validations: [{type: 'inclusion', field: 'gender', list: ['Male', 'Female']}]\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Config object</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The value to validate</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>True if the value is present in the list</p>\n</div></li></ul></div></div></div><div id='method-initConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-method-initConfig' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-method-initConfig' class='name expandable'>initConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='protected-signature'>protected</strong></div><div class='description'><div class='short'>Initialize configuration for this class. ...</div><div class='long'><p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>mixins The mixin prototypes as key - value pairs</p>\n</div></li></ul></div></div></div><div id='method-length' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.validations' rel='Ext.data.validations' class='definedIn docClass'>Ext.data.validations</a><br/><a href='source/validations.html#Ext-data-validations-method-length' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.validations-method-length' class='name expandable'>length</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> value</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>Returns true if the given value is between the configured min and max values. ...</div><div class='long'><p>Returns true if the given value is between the configured min and max values.\nFor example:</p>\n\n<pre><code>validations: [{type: 'length', field: 'name', min: 2}]\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Config object</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The value to validate</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>True if the value passes validation</p>\n</div></li></ul></div></div></div><div id='method-presence' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.validations' rel='Ext.data.validations' class='definedIn docClass'>Ext.data.validations</a><br/><a href='source/validations.html#Ext-data-validations-method-presence' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.validations-method-presence' class='name expandable'>presence</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> value</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>Validates that the given value is present. ...</div><div class='long'><p>Validates that the given value is present.\nFor example:</p>\n\n<pre><code>validations: [{type: 'presence', field: 'age'}]\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Config object</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The value to validate</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>True if validation passed</p>\n</div></li></ul></div></div></div><div id='method-statics' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-method-statics' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-method-statics' class='name expandable'>statics</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a><strong class='protected-signature'>protected</strong></div><div class='description'><div class='short'>Get the reference to the class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#!/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","allMixins":[],"meta":{"author":["Ed Spencer"]},"requires":[],"deprecated":null,"extends":"Ext.Base","inheritable":false,"static":false,"superclasses":["Ext.Base","Ext.data.validations"],"singleton":true,"code_type":"ext_define","alias":null,"statics":{"property":[],"css_var":[],"css_mixin":[],"cfg":[],"method":[],"event":[]},"subclasses":[],"uses":[],"protected":false,"mixins":[],"members":{"property":[{"tagname":"property","deprecated":null,"static":false,"owner":"Ext.data.validations","template":null,"required":null,"protected":false,"name":"emailMessage","id":"property-emailMessage"},{"tagname":"property","deprecated":null,"static":false,"owner":"Ext.data.validations","template":null,"required":null,"protected":false,"name":"emailRe","id":"property-emailRe"},{"tagname":"property","deprecated":null,"static":false,"owner":"Ext.data.validations","template":null,"required":null,"protected":false,"name":"exclusionMessage","id":"property-exclusionMessage"},{"tagname":"property","deprecated":null,"static":false,"owner":"Ext.data.validations","template":null,"required":null,"protected":false,"name":"formatMessage","id":"property-formatMessage"},{"tagname":"property","deprecated":null,"static":false,"owner":"Ext.data.validations","template":null,"required":null,"protected":false,"name":"inclusionMessage","id":"property-inclusionMessage"},{"tagname":"property","deprecated":null,"static":false,"owner":"Ext.data.validations","template":null,"required":null,"protected":false,"name":"lengthMessage","id":"property-lengthMessage"},{"tagname":"property","deprecated":null,"static":false,"owner":"Ext.data.validations","template":null,"required":null,"protected":false,"name":"presenceMessage","id":"property-presenceMessage"},{"tagname":"property","deprecated":null,"static":false,"owner":"Ext.Base","template":null,"required":null,"protected":true,"name":"self","id":"property-self"}],"css_var":[],"css_mixin":[],"cfg":[],"method":[{"tagname":"method","deprecated":null,"static":false,"owner":"Ext.Base","template":false,"required":null,"protected":true,"name":"callOverridden","id":"method-callOverridden"},{"tagname":"method","deprecated":null,"static":false,"owner":"Ext.Base","template":false,"required":null,"protected":true,"name":"callParent","id":"method-callParent"},{"tagname":"method","deprecated":null,"static":false,"owner":"Ext.data.validations","template":false,"required":null,"protected":false,"name":"email","id":"method-email"},{"tagname":"method","deprecated":null,"static":false,"owner":"Ext.data.validations","template":false,"required":null,"protected":false,"name":"exclusion","id":"method-exclusion"},{"tagname":"method","deprecated":null,"static":false,"owner":"Ext.data.validations","template":false,"required":null,"protected":false,"name":"format","id":"method-format"},{"tagname":"method","deprecated":null,"static":false,"owner":"Ext.data.validations","template":false,"required":null,"protected":false,"name":"inclusion","id":"method-inclusion"},{"tagname":"method","deprecated":null,"static":false,"owner":"Ext.Base","template":false,"required":null,"protected":true,"name":"initConfig","id":"method-initConfig"},{"tagname":"method","deprecated":null,"static":false,"owner":"Ext.data.validations","template":false,"required":null,"protected":false,"name":"length","id":"method-length"},{"tagname":"method","deprecated":null,"static":false,"owner":"Ext.data.validations","template":false,"required":null,"protected":false,"name":"presence","id":"method-presence"},{"tagname":"method","deprecated":null,"static":false,"owner":"Ext.Base","template":false,"required":null,"protected":true,"name":"statics","id":"method-statics"}],"event":[]},"private":false,"component":false,"name":"Ext.data.validations","alternateClassNames":[],"id":"class-Ext.data.validations","mixedInto":[],"xtypes":{},"files":[{"href":"validations.html#Ext-data-validations","filename":"validations.js"}]});