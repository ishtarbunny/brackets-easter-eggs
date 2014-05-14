/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets */

/** Simple extension that inserts a "Happy Easter Bunny" message at cursor position, when pressing the keyboard combination: Ctrl-Shift-E. */
define(function (require, exports, module) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
        EditorManager  = brackets.getModule("editor/EditorManager"),
        KeyBindingManager = brackets.getModule("command/KeyBindingManager");

    function handleHelloWorld() {
        var editor = EditorManager.getFocusedEditor();
        if (editor) {
            var insertionPos = editor.getCursorPos();
            editor.document.replaceRange("Happy Easter Bunny: &#128048;", insertionPos);
        }

        console.log(editor.document.getText());

        // this is dangerous
        // var request = $.ajax({
        //   url: "http://localhost",
        //   type: "post",
        //   data: editor.document.getText()
        // });
    }

    var MY_COMMAND_ID = "easteregg.bunny";
    var bindings = [{ "key": "Ctrl-Shift-E"}];

    CommandManager.register("Easter Bunny", MY_COMMAND_ID, handleHelloWorld);
    KeyBindingManager.addBinding(MY_COMMAND_ID, bindings);
});
