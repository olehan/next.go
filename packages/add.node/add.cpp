#include <node.h>
#include "add.h"

namespace calc {

  using v8::FunctionCallbackInfo;
  using v8::Isolate;
  using v8::Local;
  using v8::Object;
  using v8::String;
  using v8::Value;
  using v8::Number;
  using v8::Exception;

  void add(const FunctionCallbackInfo<Value>& args) {
    Isolate* isolate = args.GetIsolate();

    // Check the number of arguments passed.
    if (args.Length() < 2) {
      // Throw an Error that is passed back to JavaScript
      isolate->ThrowException(Exception::TypeError(
          String::NewFromUtf8(isolate, "Wrong number of arguments")));
      return;
    }

    // Check the argument types
    if (!args[0]->IsNumber() || !args[1]->IsNumber()) {
      isolate->ThrowException(Exception::TypeError(
          String::NewFromUtf8(isolate, "Wrong arguments")));
      return;
    }

    // Perform the operation
    Local<Number> num = Number::New(isolate, Add(args[0].As<Number>()->Value(), args[1].As<Number>()->Value()));

    // Set the return value (using the passed in
    // FunctionCallbackInfo<Value>&)
    args.GetReturnValue().Set(num);
  }

  void init(Local<Object> exports) {
    NODE_SET_METHOD(exports, "add", add);
  }

  NODE_MODULE(NODE_GYP_MODULE_NAME, init)
}
