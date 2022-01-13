//
//  OverlayEffect.m
//  imageoverlay
//
//  Created by rahul on 12/01/22.
//

#import <Foundation/Foundation.h>
#import "../imageoverlay-Bridging-Header.h"


@interface RCT_EXTERN_MODULE(OverlayEffect, NSObject)

RCT_EXTERN_METHOD(doOverlay:(NSDictionary *)imageOne
                  imageTwo:(NSDictionary *)imageTwo
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)


@end

