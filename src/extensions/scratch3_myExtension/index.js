const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');

class Scratch3myExtension {
    // constructor(runtime) {
    //     this.runtime = runtime;
    //     this.x = '';

    //     window.addEventListener('message', (event) => {
    //         console.log("event", event)
    //         this.x = event?.data?.detail?.value ?? "";
    //     }, false);
    // }

    // getInfo() {
    //     return {
    //         id: 'myextension',
    //         name: 'My Extension',
    //         blocks: [
    //             {
    //                 opcode: 'getX',
    //                 blockType: BlockType.REPORTER,
    //                 text: 'get x',
    //             }
    //         ], menus: {
    //         }
    //     };
    // }

    // getX() {
    //     return this.x;
    // }

    constructor(runtime) {
        this.runtime = runtime;
        
        this.x = '';

        window.addEventListener('message', (event) => {
            console.log("event", event)
            this.x = event?.data?.detail?.value ?? "";
        }, false);
    }

    getInfo() {
        return {
            id: 'myExtension',
            name: 'My Extension',
            blocks: [
                {
                    opcode: 'getX',
                    blockType: BlockType.REPORTER,
                    text: 'get x',
                }
            ],
            menus: {
            }
        };
    }

    getX() {
        //log.myText(this.x);
        return this.x;
    }
}

module.exports = Scratch3myExtension;
