# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "chroma-js" # @2.4.2
pin "sortablejs" # @1.15.7
pin "html2canvas" # @1.4.1
pin "jspdf" # @4.2.0
pin "@babel/runtime/helpers/asyncToGenerator", to: "@babel--runtime--helpers--asyncToGenerator.js" # @7.28.6
pin "@babel/runtime/helpers/defineProperty", to: "@babel--runtime--helpers--defineProperty.js" # @7.28.6
pin "@babel/runtime/helpers/slicedToArray", to: "@babel--runtime--helpers--slicedToArray.js" # @7.28.6
pin "@babel/runtime/helpers/typeof", to: "@babel--runtime--helpers--typeof.js" # @7.28.6
pin "canvg" # @3.0.11
pin "https://cdn.jsdelivr.net/npm/fast-png@6.4.0/lib-esm/PngDecoder", to: "https:----cdn.jsdelivr.net--npm--fast-png@6.4.0--lib-esm--PngDecoder.js" # @6.4.0
pin "https://cdn.jsdelivr.net/npm/fast-png@6.4.0/lib-esm/PngEncoder", to: "https:----cdn.jsdelivr.net--npm--fast-png@6.4.0--lib-esm--PngEncoder.js" # @6.4.0
pin "https://cdn.jsdelivr.net/npm/fast-png@6.4.0/lib-esm/convertIndexedToRgb", to: "https:----cdn.jsdelivr.net--npm--fast-png@6.4.0--lib-esm--convertIndexedToRgb.js" # @6.4.0
pin "https://cdn.jsdelivr.net/npm/fast-png@6.4.0/lib-esm/helpers/applyUnfilter", to: "https:----cdn.jsdelivr.net--npm--fast-png@6.4.0--lib-esm--helpers--applyUnfilter.js" # @6.4.0
pin "https://cdn.jsdelivr.net/npm/fast-png@6.4.0/lib-esm/helpers/crc", to: "https:----cdn.jsdelivr.net--npm--fast-png@6.4.0--lib-esm--helpers--crc.js" # @6.4.0
pin "https://cdn.jsdelivr.net/npm/fast-png@6.4.0/lib-esm/helpers/decodeInterlaceAdam7", to: "https:----cdn.jsdelivr.net--npm--fast-png@6.4.0--lib-esm--helpers--decodeInterlaceAdam7.js" # @6.4.0
pin "https://cdn.jsdelivr.net/npm/fast-png@6.4.0/lib-esm/helpers/decodeInterlaceNull", to: "https:----cdn.jsdelivr.net--npm--fast-png@6.4.0--lib-esm--helpers--decodeInterlaceNull.js" # @6.4.0
pin "https://cdn.jsdelivr.net/npm/fast-png@6.4.0/lib-esm/helpers/signature", to: "https:----cdn.jsdelivr.net--npm--fast-png@6.4.0--lib-esm--helpers--signature.js" # @6.4.0
pin "https://cdn.jsdelivr.net/npm/fast-png@6.4.0/lib-esm/helpers/text", to: "https:----cdn.jsdelivr.net--npm--fast-png@6.4.0--lib-esm--helpers--text.js" # @6.4.0
pin "https://cdn.jsdelivr.net/npm/fast-png@6.4.0/lib-esm/helpers/unfilter", to: "https:----cdn.jsdelivr.net--npm--fast-png@6.4.0--lib-esm--helpers--unfilter.js" # @6.4.0
pin "https://cdn.jsdelivr.net/npm/fast-png@6.4.0/lib-esm/internalTypes", to: "https:----cdn.jsdelivr.net--npm--fast-png@6.4.0--lib-esm--internalTypes.js" # @6.4.0
pin "https://cdn.jsdelivr.net/npm/fast-png@6.4.0/lib-esm/types", to: "https:----cdn.jsdelivr.net--npm--fast-png@6.4.0--lib-esm--types.js" # @6.4.0
pin "https://cdn.jsdelivr.net/npm/iobuffer@5.4.0/lib-esm/text", to: "https:----cdn.jsdelivr.net--npm--iobuffer@5.4.0--lib-esm--text.js" # @5.4.0
pin "core-js/modules/", to: "core-js--modules--.js" # @3.48.0
pin "dompurify" # @3.3.2
pin "fast-png" # @6.4.0
pin "fflate" # @0.8.2
pin "iobuffer" # @5.4.0
pin "pako" # @2.1.0
pin "raf" # @3.4.1
pin "rgbcolor" # @1.0.1
pin "stackblur-canvas" # @2.7.0
pin "svg-pathdata" # @6.0.3
