// Is virtualization detected
#include <node.h>
#include <windows.h>
#include <stdio.h>

namespace isvirtual {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;

void Method(const FunctionCallbackInfo<Value>& args) {
  args.GetReturnValue().Set(IsProcessorFeaturePresent(PF_VIRT_FIRMWARE_ENABLED));
}

void init(Local<Object> exports) {
  NODE_SET_METHOD(exports, "isVirtual", Method);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, init)

}
