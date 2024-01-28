// function that accepts a list of arguments and toggles each of them when invoked in a cycle

const toggle = (...args) => {
    let triggerCount = 0;
    return function () {
        console.log(args[triggerCount % args.length]);
        triggerCount++;
    }
}

let hello = toggle("hello");
hello(); // hello
hello(); // hello

let onOff = toggle("on", "off");
onOff(); // on
onOff(); // off
onOff(); // on
onOff(); // off