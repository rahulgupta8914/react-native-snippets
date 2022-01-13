//
//  OverlayEffect.swift
//  imageoverlay
//
//  Created by rahul on 12/01/22.
//

import Foundation

@objc(OverlayEffect)
class OverlayEffect: NSObject {
  
  @objc static func requiresMainQueueSetup() -> Bool {
    return false
    //    return true
  }
  
  @objc(doOverlay:imageTwo:resolver:rejecter:)
  func doOverlay(imageOne: NSDictionary,
                 imageTwo: NSDictionary,
                 resolver: @escaping RCTPromiseResolveBlock,
                 rejecter: @escaping RCTPromiseRejectBlock) -> Void {
    
    DispatchQueue.main.async {
      let im1: UIImage = RCTConvert.uiImage(imageOne);
      let im2: UIImage = RCTConvert.uiImage(imageTwo);
      
      let guestImage: UIImage! = im1
      let selectedOverlay: UIImage! = im2
      let bottomImage = guestImage
      let topImage = selectedOverlay
      let size : CGSize! = bottomImage?.size
      UIGraphicsBeginImageContext(size)
      let areaSize = CGRect(x: 0, y: 0, width: size.width, height: size.height)
      bottomImage?.draw(in: areaSize)
      topImage!.draw(in: areaSize, blendMode: .normal, alpha: 1)
      let newImage:UIImage = UIGraphicsGetImageFromCurrentImageContext()!
      UIGraphicsEndImageContext()
      let newString = newImage.pngData()?.base64EncodedString()
      let pngString = "data:image/png;base64,\(newString ?? "")"
      let rnImage: RNImage = RNImage(uri: pngString, width: Double(areaSize.width), height: Double(areaSize.height));
      resolver(rnImage.dictionaryRepresentation);
    }
  }
}


struct RNImage: Codable {
  var uri: String
  var width: Double
  var height: Double
  var dictionaryRepresentation: [String: Any] {
          return [
              "uri" : uri,
              "width" : width,
              "height" : height
          ]
      }
}
