/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts" />
var blocklyInitialToolbox = {
    loops: {
        blocks: []
    }
};
window.addEventListener("message", function (ev) {
    var m = ev.data;
    switch (m.type) {
        case "resize":
            var width = m.width;
            var height = m.height;
            var top_1 = m.top;
            var left = m.left;
            // Resize sim-frame
            console.log("Receive resize message");
            var simframe = document.getElementsByClassName('simframe')[0];
            if (simframe) {
                simframe.style.position = 'fixed';
                simframe.style.height = height + "px";
                simframe.style.width = width + "px";
                simframe.style.top = top_1 + "px";
                simframe.style.left = left + "px";
                simframe.style.paddingBottom = "0px";
            }
            break;
        case "showmaineditor":
            document.getElementById('maineditor').style.display = '';
            break;
        case "hidemaineditor":
            document.getElementById('maineditor').style.display = 'none';
            break;
        default:
    }
});
pxt.editor.initExtensionsAsync = function (opts) {
    var footer = document.createElement('div');
    footer.className = "blockly-footer footer";
    var injectionDiv = document.getElementById('blocksArea');
    if (injectionDiv) {
        injectionDiv.appendChild(footer);
    }
    var res = {
        toolboxOptions: {
            // Define the blocks mode toolbox
            blocklyToolbox: blocklyInitialToolbox
        }
    };
    return Promise.resolve(res);
};
