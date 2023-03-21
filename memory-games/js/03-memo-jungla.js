(function(cjs, an) {

    var p; // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.ssMetadata = [{
            name: "03_memo_jungla_atlas_P_",
            frames: [
                [0, 132, 81, 104],
                [0, 0, 102, 130]
            ]
        },
        {
            name: "03_memo_jungla_atlas_NP_",
            frames: [
                [0, 0, 102, 130],
                [0, 264, 102, 130],
                [104, 0, 102, 130],
                [0, 132, 102, 130],
                [104, 132, 102, 130],
                [104, 264, 102, 130]
            ]
        }
    ];


    // symbols:



    (lib.cebra = function() {
        this.spriteSheet = ss["03_memo_jungla_atlas_NP_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.elefante = function() {
        this.spriteSheet = ss["03_memo_jungla_atlas_NP_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.jirafa = function() {
        this.spriteSheet = ss["03_memo_jungla_atlas_NP_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.leon = function() {
        this.spriteSheet = ss["03_memo_jungla_atlas_NP_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.Mapadebits1 = function() {
        this.spriteSheet = ss["03_memo_jungla_atlas_P_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.mermoria_carta_tipitocopy = function() {
        this.spriteSheet = ss["03_memo_jungla_atlas_P_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.rinoceronte = function() {
        this.spriteSheet = ss["03_memo_jungla_atlas_NP_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.tigre = function() {
        this.spriteSheet = ss["03_memo_jungla_atlas_NP_"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();
    // helper functions:

    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
    }


    (lib.Symbol4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFCC00").s().p("AhgCpIkuBaICzkDIizkCIEuBZIC+j5IAIE6IEpBoIkpBoIgIE7g");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-39.9, -41.9, 79.8, 83.8), null);


    (lib.playagain = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#CC3300").s().p("AnbF0QgJgEgDgJIgBgIIAAgGIARidQAEgiAZgHQAMgDALAFQAKAEAJANIBcCBIAFAIIABAHQADAJgEAIQgFAIgLADQgIACgIgEQgIgFgGgJIgLgSIhOAWIgBAVQgBALgEAHIgFAGIgHADIgHABQgGAAgGgDgAmzEYIAygNIgrg+gAjWEwQgUgCgSgMQgTgLgMgSQgMgRgGgXQgGgXABgWQACgVAKgSQALgTAPgNQARgMAWgGQAMgDAMgBQAMAAALADQAVAFAEAOQADAKgDAIQgEAIgIADQgEABgFAAIgMgCQgGgCgGAAQgIAAgHACQgMADgIAHQgJAGgFALQgFAKgBANQAAALAEAOQADANAGALQAHAJAJAHQAKAHALABQALACAMgDQAKgDAIgFQAHgFAEgHQAEgIABgGQABgHgBgGIgnAKQgLADgIgEQgHgEgDgLQgCgJAEgIQAEgHALgCIA9gRQAOgFAIAHQAHAFAEAPQAFAVgCATQgCAUgJAQQgSAhgmALQgPAEgOAAIgOgBgAg2EDQgJgEgDgJIgBgIIAAgGIASidQADgiAZgGQAMgEAKAFQAKAEAJANIBcCBIAFAIIACAHQACAJgEAIQgFAIgLADQgIACgIgEQgIgFgGgJIgLgRIhNAVIgBAWQAAAKgFAHIgFAHIgHACIgHABQgGAAgGgDgAgOCnIAygNIgqg+gACcDHQgIgFgEgOIgniRQgEgSAEgIQAFgJAKgCQALgDAIAFQAIAEAEAPIAoCUQADAPgEAIQgFAIgKADIgIABQgGAAgFgDgAD1CvQgIgFgEgPIgqiaQgCgKAEgIQAEgHALgDQAHgCAIADQAHABAIAHIBiBTIgZhYQgEgPAFgIQAEgIALgDQAJgDAIAFQAJAFAEAOIApCaQADALgEAIQgEAIgLACQgIACgHgCQgIgCgIgHIhhhSIAZBXQADAPgEAIQgFAIgKADIgHABQgGAAgFgDgAHDB7QgJgFgDgLQgCgLAFgJQAEgIALgEQALgCAJAFQAIAFAEALQACAKgFAKQgFAJgKADIgHABQgHAAgGgEgAGzA9QgIgFgEgPIgYhaQgEgPAEgIQAEgJALgDQAKgCAJAFQAIAEAEAQIAYBaQAEAPgEAIQgFAJgKACIgIABQgGAAgFgDgAmXABQgIgEgEgPIgqicQgDgMAEgFQAFgGALgCIAmgLQAZgHATAEQAUAEAMAOQAOANAFAVQAJAhgOAXQgOAXgnALIgOADIAKAmQAEAPgFAIQgEAHgLADIgGABQgGAAgGgDgAmLiqIgOAEIAPA4IAPgDQAPgFAGgIQAGgJgDgOQgEgOgKgFQgGgEgHAAQgGAAgHACgAjtgpQgGgDgCgMIgqibQgEgPAEgJQAFgIAKgDQALgDAIAFQAIAFAEAPIAkCEIAygNQAKgDAIAEQAHAEADAKQADALgFAHQgEAHgLADIhKAUQgHACgGAAQgDAAgDgBgAhfhOQgIgEgEgKIgBgIIAAgFIASieQADghAagHQAMgEAKAFQALAFAIAMIBbCCIAFAIIACAGQADAJgFAIQgEAIgLADQgJACgHgEQgIgEgHgKIgLgRIhNAVIgBAWQAAALgFAHIgEAGIgHADIgIABQgGAAgGgDgAg3iqIAzgOIgrg+gACoiZQgIgFgEgOIgMgsIhShMQgMgJgBgKQgCgJAGgJQAHgIAJgCQAKgBANAKIA/A9IAZhVQAFgOAJgEQAJgEAKAEQAJAFAEAIQAEAJgFAPIgjBqIAMAtQAEAOgEAIQgFAJgLADIgGAAQgGAAgGgDg");
        this.shape.setTransform(69.3, 54.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#CC3300").s().p("AhsiLIDZCLIjZCMg");
        this.shape_1.setTransform(73, 100.8);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFCC00").s().p("AklH+QjTh6hAjsQg+jqB5jTQB6jTDshAQDqg/DUB6QDTB6A/DrQA/Drh6DTQh6DUjrA+QhRAWhNAAQiVAAiLhQg");
        this.shape_2.setTransform(67.5, 67.5);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#CC3300").s().p("AlQJHQjxiMhJkNQhIkMCMjyQCLjxEOhJQEMhIDxCMQDyCLBIEOQBIEMiLDyQiMDxkNBIQhcAZhXAAQisAAifhcg");
        this.shape_3.setTransform(67.5, 67.5);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#333333").s().p("AnbF0QgJgEgDgJIgBgIIAAgGIARidQAEgiAZgHQAMgDALAFQAKAEAJANIBcCBIAFAIIABAHQADAJgEAIQgFAIgLADQgIACgIgEQgIgFgGgJIgLgSIhOAWIgBAVQgBALgEAHIgFAGIgHADIgHABQgGAAgGgDgAmzEYIAygNIgrg+gAjWEwQgUgCgSgMQgTgLgMgSQgMgRgGgXQgGgXABgWQACgVAKgSQALgTAPgNQARgMAWgGQAMgDAMgBQAMAAALADQAVAFAEAOQADAKgDAIQgEAIgIADQgEABgFAAIgMgCQgGgCgGAAQgIAAgHACQgMADgIAHQgJAGgFALQgFAKgBANQAAALAEAOQADANAGALQAHAJAJAHQAKAHALABQALACAMgDQAKgDAIgFQAHgFAEgHQAEgIABgGQABgHgBgGIgnAKQgLADgIgEQgHgEgDgLQgCgJAEgIQAEgHALgCIA9gRQAOgFAIAHQAHAFAEAPQAFAVgCATQgCAUgJAQQgSAhgmALQgPAEgOAAIgOgBgAg2EDQgJgEgDgJIgBgIIAAgGIASidQADgiAZgGQAMgEAKAFQAKAEAJANIBcCBIAFAIIACAHQACAJgEAIQgFAIgLADQgIACgIgEQgIgFgGgJIgLgRIhNAVIgBAWQAAAKgFAHIgFAHIgHACIgHABQgGAAgGgDgAgOCnIAygNIgqg+gACcDHQgIgFgEgOIgniRQgEgSAEgIQAFgJAKgCQALgDAIAFQAIAEAEAPIAoCUQADAPgEAIQgFAIgKADIgIABQgGAAgFgDgAD1CvQgIgFgEgPIgqiaQgCgKAEgIQAEgHALgDQAHgCAIADQAHABAIAHIBiBTIgZhYQgEgPAFgIQAEgIALgDQAJgDAIAFQAJAFAEAOIApCaQADALgEAIQgEAIgLACQgIACgHgCQgIgCgIgHIhhhSIAZBXQADAPgEAIQgFAIgKADIgHABQgGAAgFgDgAHDB7QgJgFgDgLQgCgLAFgJQAEgIALgEQALgCAJAFQAIAFAEALQACAKgFAKQgFAJgKADIgHABQgHAAgGgEgAGzA9QgIgFgEgPIgYhaQgEgPAEgIQAEgJALgDQAKgCAJAFQAIAEAEAQIAYBaQAEAPgEAIQgFAJgKACIgIABQgGAAgFgDgAmXABQgIgEgEgPIgqicQgDgMAEgFQAFgGALgCIAmgLQAZgHATAEQAUAEAMAOQAOANAFAVQAJAhgOAXQgOAXgnALIgOADIAKAmQAEAPgFAIQgEAHgLADIgGABQgGAAgGgDgAmLiqIgOAEIAPA4IAPgDQAPgFAGgIQAGgJgDgOQgEgOgKgFQgGgEgHAAQgGAAgHACgAjtgpQgGgDgCgMIgqibQgEgPAEgJQAFgIAKgDQALgDAIAFQAIAFAEAPIAkCEIAygNQAKgDAIAEQAHAEADAKQADALgFAHQgEAHgLADIhKAUQgHACgGAAQgDAAgDgBgAhfhOQgIgEgEgKIgBgIIAAgFIASieQADghAagHQAMgEAKAFQALAFAIAMIBbCCIAFAIIACAGQADAJgFAIQgEAIgLADQgJACgHgEQgIgEgHgKIgLgRIhNAVIgBAWQAAALgFAHIgEAGIgHADIgIABQgGAAgGgDgAg3iqIAzgOIgrg+gACoiZQgIgFgEgOIgMgsIhShMQgMgJgBgKQgCgJAGgJQAHgIAJgCQAKgBANAKIA/A9IAZhVQAFgOAJgEQAJgEAKAEQAJAFAEAIQAEAJgFAPIgjBqIAMAtQAEAOgEAIQgFAJgLADIgGAAQgGAAgGgDg");
        this.shape_4.setTransform(69.3, 54.5);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFCC00").s().p("Eg4AAY2MAAAgxrMBwBAAAMAAAAxrg");
        this.shape_5.setTransform(63.6, 60.9);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape_4
            }]
        }, 1).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape_4
            }]
        }, 1).to({
            state: [{
                t: this.shape_5
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 135, 135);


    (lib.funda = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#005A53").s().p("Eg5BAZ4MAAAgzwMByDAAAMAAAAzwg");
        this.shape.setTransform(-28.1, -10.4);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.funda, new cjs.Rectangle(-393, -176.1, 730, 331.3), null);


    (lib.btn_menu = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#009999").s().p("ACAArQgMgIAAgSIAAhDIAgAAIAABAQAAAHADADQADADAGAAQAGAAADgCQAEgCABgDIAAgMIAAg6IAZAAIAABBQAAATgMAJQgLAIgSAAQgTAAgLgIgABLAxIgbgsQgGgHgFgNQACAKAAAGIAAAwIgZAAIAAhjIAdAAIAYAlQAHALADAHQgCgMAAgNIAAgeIAZAAIAABjgAhIAxIAAhjIBKAAIAAAXIgsAAIAAAPIAlAAIAAAVIglAAIAAAQIAsAAIAAAYgAh1AxIAAhGIgTBGIgTAAIgUhGIAABGIgXAAIAAhjIApAAIAOA0IAOg0IAoAAIAABjg");
        this.shape.setTransform(43.3, 9.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AkMBcIhRhSQgKgKAKgKIBRhRQAGgFAGABIABAAIAABDQAFgCAGAAIAwAAIABAAIAAgSQABgvAxAAIHCAAQAyAAAAAyIAABbQAAAygyAAInCAAQgwAAgCgvIAAgSIgBAAIgwAAQgGAAgFgCIAABDIgBAAIgBAAQgGAAgFgEg");
        this.shape_1.setTransform(35.5, 9.6);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#333333").s().p("ACAArQgMgIAAgSIAAhDIAgAAIAABAQAAAHADADQADADAGAAQAGAAADgCQAEgCABgDIAAgMIAAg6IAZAAIAABBQAAATgMAJQgLAIgSAAQgTAAgLgIgABLAxIgbgsQgGgHgFgNQACAKAAAGIAAAwIgZAAIAAhjIAdAAIAYAlQAHALADAHQgCgMAAgNIAAgeIAZAAIAABjgAhIAxIAAhjIBKAAIAAAXIgsAAIAAAPIAlAAIAAAVIglAAIAAAQIAsAAIAAAYgAh1AxIAAhGIgTBGIgTAAIgUhGIAABGIgXAAIAAhjIApAAIAOA0IAOg0IAoAAIAABjg");
        this.shape_2.setTransform(43.3, 9.9);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AgXAfQgNAAgJgJQgJgJAAgNQAAgMAJgJQAJgJANAAIAvAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAg");
        this.shape_3.setTransform(13.4, 9.6);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AAlBcIhQhSQgLgKALgKIBQhRQAFgFAGABIABAAIAAC/IgBAAIgBAAQgFAAgFgEg");
        this.shape_4.setTransform(5, 9.6);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFFFF").s().p("AjgBgQgxAAgBgvIAAhhQABgvAxAAIHBAAQAyAAAAAyIAABbQAAAygyAAg");
        this.shape_5.setTransform(43.5, 9.6);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#009999").s().p("ApDC0IAAlnISHAAIAAFng");
        this.shape_6.setTransform(49.5, 10.6);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }]
        }, 1).to({
            state: [{
                t: this.shape_6
            }]
        }, 2).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 71, 19.3);


    (lib._06 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /* stop();*/
            this.stop();
        }
        this.frame_1 = function() {
            /* stop();*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

        // Capa 1
        this.instance = new lib.mermoria_carta_tipitocopy();
        this.instance.parent = this;
        this.instance.setTransform(-50.9, -64.9);

        this.instance_1 = new lib.tigre();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-51, -65);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-50.9, -64.9, 102, 130);


    (lib._05 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /* stop();*/
            this.stop();
        }
        this.frame_1 = function() {
            /* stop();*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

        // Capa 1
        this.instance = new lib.mermoria_carta_tipitocopy();
        this.instance.parent = this;
        this.instance.setTransform(-50.9, -64.9);

        this.instance_1 = new lib.rinoceronte();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-51, -65);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-50.9, -64.9, 102, 130);


    (lib._04 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /* stop();*/
            this.stop();
        }
        this.frame_1 = function() {
            /* stop();*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

        // Capa 1
        this.instance = new lib.mermoria_carta_tipitocopy();
        this.instance.parent = this;
        this.instance.setTransform(-50.9, -64.9);

        this.instance_1 = new lib.jirafa();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-51, -65);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-50.9, -64.9, 102, 130);


    (lib._03 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /* stop();*/
            this.stop();
        }
        this.frame_1 = function() {
            /* stop();*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

        // Capa 1
        this.instance = new lib.mermoria_carta_tipitocopy();
        this.instance.parent = this;
        this.instance.setTransform(-50.9, -64.9);

        this.instance_1 = new lib.leon();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-51, -65);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-50.9, -64.9, 102, 130);


    (lib._02 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /* stop();*/
            this.stop();
        }
        this.frame_1 = function() {
            /* stop();*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

        // Capa 1
        this.instance = new lib.mermoria_carta_tipitocopy();
        this.instance.parent = this;
        this.instance.setTransform(-50.9, -64.9);

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#333333").s().p("An9KKIAA0TIP7AAIAAUTg");

        this.instance_1 = new lib.elefante();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-51, -65);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }, {
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-51, -65, 102, 130);


    (lib._01 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /* stop();*/
            this.stop();
        }
        this.frame_1 = function() {
            /* stop();*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

        // Capa 1
        this.instance = new lib.mermoria_carta_tipitocopy();
        this.instance.parent = this;
        this.instance.setTransform(-50.9, -64.9);

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#333333").s().p("An9KKIAA0TIP7AAIAAUTg");

        this.instance_1 = new lib.cebra();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-51, -65);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }, {
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-51, -65, 102, 130);


    (lib.Symbol1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.removeAllEventListeners();

            this.on("tick", onUpdate.bind(this));


            function onUpdate(e) {
                this.estrella1.rotation += 10
                this.estrella2.rotation -= 10
                this.estrella3.rotation += 10
                this.estrella4.rotation -= 10
                this.estrella5.rotation += 10
                this.estrella6.rotation -= 10
                this.estrella7.rotation += 10
                this.estrella8.rotation -= 10

            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // estrellas
        this.estrella4 = new lib.Symbol4();
        this.estrella4.name = "estrella4";
        this.estrella4.parent = this;
        this.estrella4.setTransform(-106.1, 116.6, 0.368, 0.368, 0, 0, 0, -0.1, 0);

        this.estrella7 = new lib.Symbol4();
        this.estrella7.name = "estrella7";
        this.estrella7.parent = this;
        this.estrella7.setTransform(290.1, -13.5, 0.343, 0.343);

        this.estrella2 = new lib.Symbol4();
        this.estrella2.name = "estrella2";
        this.estrella2.parent = this;
        this.estrella2.setTransform(-354.2, -0.5, 0.323, 0.323, 0, 0, 0, -0.1, 0);

        this.estrella5 = new lib.Symbol4();
        this.estrella5.name = "estrella5";
        this.estrella5.parent = this;
        this.estrella5.setTransform(103.9, 29.5, 0.393, 0.393, 0, 0, 0, -0.1, 0);

        this.estrella8 = new lib.Symbol4();
        this.estrella8.name = "estrella8";
        this.estrella8.parent = this;
        this.estrella8.setTransform(253, 85.6, 0.618, 0.618, 0, 0, 0, -0.1, 0);

        this.estrella1 = new lib.Symbol4();
        this.estrella1.name = "estrella1";
        this.estrella1.parent = this;
        this.estrella1.setTransform(-322.1, -94.5, 0.618, 0.618, 0, 0, 0, -0.1, 0);

        this.estrella6 = new lib.Symbol4();
        this.estrella6.name = "estrella6";
        this.estrella6.parent = this;
        this.estrella6.setTransform(265.7, -107.5, 0.689, 0.689);

        this.estrella3 = new lib.Symbol4();
        this.estrella3.name = "estrella3";
        this.estrella3.parent = this;
        this.estrella3.setTransform(-238.7, 64);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.estrella3
            }, {
                t: this.estrella6
            }, {
                t: this.estrella1
            }, {
                t: this.estrella8
            }, {
                t: this.estrella5
            }, {
                t: this.estrella2
            }, {
                t: this.estrella7
            }, {
                t: this.estrella4
            }]
        }).wait(1));

        // tipito
        this.instance = new lib.Mapadebits1();
        this.instance.parent = this;
        this.instance.setTransform(-71, -19);

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AIkDiQgrgRgjgiQgigigSgsQgRgrAAg2QAAg0ARgsQASgsAigiQAjghArgRQArgRAzAAQAzAAAqARQArARAjAhQAiAiASAsQARAsAAA0QAAA2gRArQgRAsgjAiQgiAigrARQgrAQgzAAQg0AAgqgQgAJOiAQgXAJgSATQgSATgJAZQgJAZAAAfQAAA9AkAmQASATAXAKQAXAJAdAAQAdAAAXgJQAXgKARgTQATgTAIgZQAJgYAAgfQAAgfgJgZQgIgZgTgTQgRgTgXgJQgXgKgdAAQgdAAgXAKgAcFDeQgQgQAAgYQAAgZAQgQQAQgPAYgBQAYABAQAPQAQARAAAYQAAAYgQAQQgQARgYAAQgYAAgQgRgA3ADqQgOAAgKgHQgKgIgHgKQgGgLgDgKIhEi0IhFC0QgEALgHALQgGALgLAHQgLAHgSgBQgOAAgKgHQgKgHgGgLQgHgKgDgLIh6lUQgJghAJgSQAIgTAWgIQAWgIATAKQATAKALAfIBLDoIBEi1IAIgSIAHgMQAHgIAKgEQAJgEAMgBIALACQAGAAAFADQALADAHAIQAHAJAHAWIBEC1IBLjoQALgfASgKQATgKAWAIQAXAIAIATQAJASgKAhIh5FUQgEALgGALQgGALgLAHQgKAGgPAAIgFAAgATTDiQgOgJgNgSIigjmIADDGQAAAigPAPQgOAQgXgBQgYABgPgQQgOgPAAgiIAAleQAAgZANgNQAOgOAZAAQAQAAAPAJQAPAJAMASIChDqIgDjKQAAgiAOgQQAPgPAXABQAYgBAOAPQAPAQAAAiIAAFeQAAAYgNAOQgOANgZAAQgRAAgPgIgAWADfQgNgJABgbIAAl2QgBgbANgJQALgJAcABIDWAAQAYAAAOAMQANAMAAAYQAAAYgNAMQgOANgYAAIifAAIAABUICQAAQAYAAAOAMQANANAAAYQAAAXgNAMQgOANgYAAIiQAAIAABXIClAAQAYAAANANQAOAMAAAXQAAAYgOANQgNAMgYAAIjcAAIgDAAQgZAAgLgIgAgMDfQgNgJAAgbIAAl2QAAgbANgJQANgJAYABIBRAAQA7AAAsAQQAtAQAfAhQA9BBADBsQABAwgPApQgPAogeAgQgeAggxAQQgwAPhEAAIhGAAIgDAAQgWAAgMgIgABQCFIAbAAQBGAAAhggQAhggAAg9QAAhGghgkQgggkhFAAIgdAAgAzLDfQgNgJABgbIAAl2QgBgbANgJQALgJAcABIDWAAQAYAAAOAMQANAMAAAYQAAAYgNAMQgOANgYAAIifAAIAABUICQAAQAYAAAOAMQANANAAAYQAAAXgNAMQgOANgYAAIiQAAIAABXIClAAQAYAAANANQAOAMAAAXQAAAYgOANQgNAMgYAAIjcAAIgDAAQgZAAgLgIgAn/DYQgPgPABgiIAAlOQAAgiAOgPQAPgPAYAAQAXAAAPAPQAOAPABAiIAAEtIByAAQAZAAANANQANAMAAAXQAAAYgNANQgNAMgZAAIidAAIgCAAQggAAgPgPgAtHDYQgPgPAAgiIAAlOQABgiAOgPQAOgPAYAAQAXAAAPAPQAOAPABAiIAAEtIByAAQAZAAANANQANAMABAXQgBAYgNANQgNAMgZAAIidAAIgCAAQggAAgOgPgActBhQgYABgPgPQgOgQAAgiIAAjPQAAgiAOgPQAPgPAYAAQAXAAAOAPQAPAPAAAiIAADPQAAAigPAQQgOAOgWAAIgBAAg");
        this.shape.setTransform(-37.4, -69.6);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-367, -136.4, 670.8, 268.4), null);


    // stage content:
    (lib._03memojungla = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            createjs.Touch.enable(stage);

            this.menu_btn.addEventListener("click", navega);

            function navega() {
                window.open("//www.freshteacher.software", "_parent");
            }
        }
        this.frame_2 = function() {
            this.stop();

            //definiciones
            var state = 0; //bloquear ejecucion durante tiempo de espera
            var num_x = 6; //numero de cartas en horizontal
            var num_y = 2; //numero de cartas en vertical
            var num = num_x * num_y; //numero de cartas = 12
            var pos0x = 72; //posicion inicial de la primera carta
            var pos0y = 110; //posicion inicial de la primera carta
            var dist = 10; //distancia en pixeles entre las cartas
            var width = this.card1a.nominalBounds.width; //anchura de las cartas
            var height = this.card1a.nominalBounds.height; //altura de las cartas

            //array inicial con todas las cartas ordenadas
            var cards_init = [];

            onRestart.bind(this)();

            var idSelected = "";
            var itemSelected = null;

            var isAnimating = false;
            var countCards = num_x * num_y;

            this.onRestart = onRestart.bind(this);


            function onRestart() {
                console.log("onRestart");
                cards_init = [this.card1a, this.card1b, this.card2a, this.card2b, this.card3a, this.card3b, this.card4a, this.card4b, this.card5a, this.card5b, this.card6a, this.card6b];
                countCards = num_x * num_y;
                isAnimating = false;
                itemSelected = null;
                idSelected = "";
                state = 0;

                //mesclar array de cartas
                var cards = new Array();
                for (var i = 0; i < num; i++) {
                    var pos = parseInt(Math.random() * cards_init.length);
                    var value = cards_init[pos];
                    value.removeAllEventListeners();
                    value.on("click", onClickCard.bind(this));
                    value.alpha = 1;
                    cards.push(value);
                    cards_init.splice(pos, 1);
                }
                //trace(cards.join()); 

                //mesclar cartas
                var pos_x = 1;
                var pos_y = 1;
                for (var i = 0; i < num; i++) {
                    cards[i].x = pos0x + (pos_x) * dist + (pos_x - 1) * width;
                    cards[i].y = pos0y + (pos_y) * dist + (pos_y - 1) * height;
                    //trace(pos_x+"/"+pos_y+": x="+cards[i]._x+", y="+cards[i]._y+" >>> "+cards[i]._name);
                    if (pos_x == num_x) {
                        pos_x = 1;
                        pos_y++;
                    } else {
                        pos_x++;
                    }
                }
            }



            function onClickCard(e) {
                if (isAnimating) return;

                var item = e.currentTarget;
                var names = item.name.split("card");

                playSound("clic_marimba");

                if (state == 0) {
                    idSelected = names[1];
                    itemSelected = item;
                    item.gotoAndStop(1);
                    state = 1;
                } else if (state == 1) {
                    if (idSelected == names[1]) return; // same

                    item.gotoAndStop(1);

                    if (names[1].charAt(0) == idSelected.charAt(0)) // correct
                    {
                        isAnimating = true;
                        console.log("good");
                        playSound("good");
                        createjs.Tween.get(this)
                            .wait(250)
                            //.to({alpha:0, visible:false}, 1000)
                            .call(function() {
                                itemSelected.alpha = 0.5;
                                item.alpha = 0.5;
                                state = 0;
                                isAnimating = false;
                                countCards -= 2;

                                itemSelected.removeAllEventListeners();
                                item.removeAllEventListeners();

                                if (countCards == 0) {
                                    console.log("win game");
                                    this.gotoAndPlay(4);
                                }



                            }.bind(this));
                    } else {
                        console.log("wrong");
                        isAnimating = true;
                        createjs.Tween.get(this)
                            .wait(800)
                            //.to({alpha:0, visible:false}, 1000)
                            .call(function() {
                                itemSelected.gotoAndStop(0);
                                item.gotoAndStop(0);
                                state = 0;
                                isAnimating = false;

                            }.bind(this));

                    }


                }
            }
        }
        this.frame_25 = function() {
            playSound("applause");
        }
        this.frame_91 = function() {
            this.stop();

            this.opciones.removeAllEventListeners();

            this.opciones.on("click", onOpciones.bind(this));

            function onOpciones(e) {
                this.gotoAndPlay(2);
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(23).call(this.frame_25).wait(66).call(this.frame_91).wait(1));

        // marco
        this.shape = new cjs.Shape();
        // this.shape.graphics.f("#FFFFFF").s().p("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");
        // this.shape.setTransform(360.8, 21);

        this.menu_btn = new lib.btn_menu();
        this.menu_btn.name = "menu_btn";
        this.menu_btn.parent = this;
        this.menu_btn.setTransform(52.1, 26.5, 1, 1, 0, 0, 0, 41.4, 17.4);
        new cjs.ButtonHelper(this.menu_btn, 0, 1, 2, false, new lib.btn_menu(), 3);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#009999").s().p("Eg5BAcrMAAAg5VMByDAAAMAAAA5VgEg2ZAYAQAiBvCtAAMBmKAAAIACgwIA9AAIgHglIAnAFQAvAEAogJQB9geABiYMAAAgodIg3gDIAAg0IgrAFIAIghQADgqgKgjQgjhuitAAMhmJAAAIgDAwIg8AAIAHAlQg+gPhAAPQh9AegBCYMAAAAocIA4AEIAAA1IAqgGQgSA2ARA3g");
        this.shape_1.setTransform(365, 183.5);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.menu_btn
            }, {
                t: this.shape
            }]
        }).wait(92));

        // opciones
        this.opciones = new lib.playagain();
        this.opciones.name = "opciones";
        this.opciones.parent = this;
        this.opciones.setTransform(623.5, 259, 1, 1, 30, 0, 0, 64.1, 64);
        this.opciones._off = true;
        new cjs.ButtonHelper(this.opciones, 0, 1, 2, false, new lib.playagain(), 3);

        this.timeline.addTween(cjs.Tween.get(this.opciones).wait(91).to({
            _off: false
        }, 0).wait(1));

        // Capa_7
        this.instance = new lib.Symbol1();
        this.instance.parent = this;
        this.instance.setTransform(390.7, 202.8);
        this.instance.alpha = 0;
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({
            _off: false
        }, 0).to({
            alpha: 1
        }, 5).wait(42));

        // funda
        this.instance_1 = new lib.funda();
        this.instance_1.parent = this;
        this.instance_1.setTransform(396.1, 206.1);
        this.instance_1.alpha = 0;
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({
            _off: false
        }, 0).to({
            alpha: 1
        }, 6).wait(47));

        // Cartas
        this.card6b = new lib._06();
        this.card6b.name = "card6b";
        this.card6b.parent = this;
        this.card6b.setTransform(655.9, 271.6);

        this.card6a = new lib._06();
        this.card6a.name = "card6a";
        this.card6a.parent = this;
        this.card6a.setTransform(563.7, 271.6);

        this.card5b = new lib._05();
        this.card5b.name = "card5b";
        this.card5b.parent = this;
        this.card5b.setTransform(339.4, 276.6);

        this.card5a = new lib._05();
        this.card5a.name = "card5a";
        this.card5a.parent = this;
        this.card5a.setTransform(453.9, 280.1);

        this.card4b = new lib._04();
        this.card4b.name = "card4b";
        this.card4b.parent = this;
        this.card4b.setTransform(665.7, 140.8);

        this.card4a = new lib._04();
        this.card4a.name = "card4a";
        this.card4a.parent = this;
        this.card4a.setTransform(558, 141.6);

        this.card3b = new lib._03();
        this.card3b.name = "card3b";
        this.card3b.parent = this;
        this.card3b.setTransform(120, 270.8);

        this.card3a = new lib._03();
        this.card3a.name = "card3a";
        this.card3a.parent = this;
        this.card3a.setTransform(217.2, 264);

        this.card2b = new lib._02();
        this.card2b.name = "card2b";
        this.card2b.parent = this;
        this.card2b.setTransform(451.2, 140.8);

        this.card1b = new lib._01();
        this.card1b.name = "card1b";
        this.card1b.parent = this;
        this.card1b.setTransform(225.7, 133.8);

        this.card2a = new lib._02();
        this.card2a.name = "card2a";
        this.card2a.parent = this;
        this.card2a.setTransform(344, 134.8);

        this.card1a = new lib._01();
        this.card1a.name = "card1a";
        this.card1a.parent = this;
        this.card1a.setTransform(118.4, 133.8);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.card1a
            }, {
                t: this.card2a
            }, {
                t: this.card1b
            }, {
                t: this.card2b
            }, {
                t: this.card3a
            }, {
                t: this.card3b
            }, {
                t: this.card4a
            }, {
                t: this.card4b
            }, {
                t: this.card5a
            }, {
                t: this.card5b
            }, {
                t: this.card6a
            }, {
                t: this.card6b
            }]
        }, 2).to({
            state: []
        }, 44).wait(46));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(365, 183.5, 730, 367);
    // library properties:
    lib.properties = {
        id: 'B9F9C489C2541543BB750011AB1957CC',
        width: 730,
        height: 367,
        fps: 30,
        color: "#CCCCCC",
        opacity: 1.00,
        manifest: [{
                src: "images/03_memo_jungla_atlas_P_.png",
                id: "03_memo_jungla_atlas_P_"
            },
            {
                src: "images/03_memo_jungla_atlas_NP_.jpg",
                id: "03_memo_jungla_atlas_NP_"
            },
            {
                src: "sarasa/applause.mp3",
                id: "applause"
            },
            {
                src: "sarasa/clic_marimba.mp3",
                id: "clic_marimba"
            },
            {
                src: "sarasa/good.mp3",
                id: "good"
            }
        ],
        preloads: []
    };



    // bootstrap callback support:

    (lib.Stage = function(canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();

    p.setAutoPlay = function(autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function() {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }
    p.stop = function(ms) {
        if (ms) this.seek(ms);
        this.tickEnabled = false;
    }
    p.seek = function(ms) {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
    }
    p.getDuration = function() {
        return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
    }

    p.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
    }

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function(fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };

    an.compositions = an.compositions || {};
    an.compositions['B9F9C489C2541543BB750011AB1957CC'] = {
        getStage: function() {
            return exportRoot.getStage();
        },
        getLibrary: function() {
            return lib;
        },
        getSpriteSheet: function() {
            return ss;
        },
        getImages: function() {
            return img;
        }
    };

    an.compositionLoaded = function(id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }

    an.getComposition = function(id) {
        return an.compositions[id];
    }



})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;