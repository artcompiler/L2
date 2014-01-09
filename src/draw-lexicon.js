/* -*- Mode: js; js-indent-level: 2; indent-tabs-mode: nil; tab-width: 2 -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */
/*
 * Copyright 2014, Art Compiler LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

exports.wordMap = {
  "function": [
	  "triangle",
	  "rectangle",
	  "ellipse",
	  "text",
  ]
}

exports.globalLexicon = {
  "let" : { "tk": 0x12, "cls": "keyword" },
  "if" : { "tk": 0x05, "cls": "keyword" },
  "then" : { "tk": 0x06, "cls": "keyword" },
  "else" : { "tk": 0x07, "cls": "keyword" },
  "case" : { "tk": 0x0F, "cls": "keyword" },
  "of" : { "tk": 0x10, "cls": "keyword" },
  "end" : { "tk": 0x11, "cls": "keyword", "length": 0 },

  "zero" : { "tk": 0x02, "cls": "number", "length": 0 },
  "one" : { "tk": 0x02, "cls": "number", "length": 0 },
  "two" : { "tk": 0x02, "cls": "number", "length": 0 },
  "three" : { "tk": 0x02, "cls": "number", "length": 0 },
  "four" : { "tk": 0x02, "cls": "number", "length": 0 },
  "five" : { "tk": 0x02, "cls": "number", "length": 0 },
  "six" : { "tk": 0x02, "cls": "number", "length": 0 },
  "seven" : { "tk": 0x02, "cls": "number", "length": 0 },
  "eight" : { "tk": 0x02, "cls": "number", "length": 0 },
  "nine" : { "tk": 0x02, "cls": "number", "length": 0 },
  "ten" : { "tk": 0x02, "cls": "function", "length": 0 },
  "eleven" : { "tk": 0x02, "cls": "function", "length": 0 },
  "twelve" : { "tk": 0x02, "cls": "function", "length": 0 },
  "thirteen" : { "tk": 0x02, "cls": "function", "length": 0 },
  "fourteen" : { "tk": 0x02, "cls": "function", "length": 0 },
  "fifteen" : { "tk": 0x02, "cls": "function", "length": 0 },
  "sixteen" : { "tk": 0x02, "cls": "function", "length": 0 },
  "seventeen" : { "tk": 0x02, "cls": "function", "length": 0 },
  "eighteen" : { "tk": 0x02, "cls": "function", "length": 0 },
  "nineteen" : { "tk": 0x02, "cls": "function", "length": 0 },
  "twenty" : { "tk": 0x02, "cls": "function", "length": 0 },
  "thirty" : { "tk": 0x02, "cls": "function", "length": 0 },
  "forty" : { "tk": 0x02, "cls": "function", "length": 0 },
  "fifty" : { "tk": 0x02, "cls": "function", "length": 0 },
  "sixty" : { "tk": 0x02, "cls": "function", "length": 0 },
  "seventy" : { "tk": 0x02, "cls": "function", "length": 0 },
  "eighty" : { "tk": 0x02, "cls": "function", "length": 0 },
  "ninety" : { "tk": 0x02, "cls": "function", "length": 0 },

  "print" : { "tk": 0x01, "cls": "function", "length": 1 },

  "size" : { "tk": 0x01, "name": "SIZE", "cls": "function", "length": 2 },
  "background" : { "tk": 0x01, "name": "BACKGROUND", "cls": "function", "length": 1 },

  "text" : { "tk": 0x01, "name": "TEXT", "cls": "function", "length": 1 },
  "tri" :      { "tk": 0x01, "name": "TRI", "cls": "function", "length": 6 },
  "triangle" : { "tk": 0x01, "name": "TRI", "cls": "function", "length": 6 },
  "triside" : { "tk": 0x01, "name": "TRISIDE", "cls": "function", "length": 3 },
  "rectangle" : { "tk": 0x01, "name": "RECT", "cls": "function", "length": 2 },
  "map" : { "tk": 0x01, "name": "MAP", "cls": "function", "length": 2 },
  "ellipse" : { "tk": 0x01, "name": "ELLIPSE", "cls": "function", "length": 2 },
  "bezier" : { "tk": 0x01, "name": "BEZIER", "cls": "function", "length": 8 },
  "curve" : { "tk": 0x01, "name": "BEZIER", "cls": "function", "length": 8 },
  "grid" : { "tk": 0x01, "name": "GRID", "cls": "function", "length": 4 },
  "line" : { "tk": 0x01, "name": "LINE", "cls": "function", "length": 2 },
  "point" : { "tk": 0x01, "name": "POINT", "cls": "function", "length": 2 },

  "path" : { "tk": 0x01, "name": "PATH", "cls": "function", "length": 1 },
  "closepath" : { "tk": 0x01, "name": "CLOSEPATH", "cls": "function", "length": 0 },
  "moveto" : { "tk": 0x01, "name": "MOVETO", "cls": "function", "length": 3 },
  "lineto" : { "tk": 0x01, "name": "LINETO", "cls": "function", "length": 3 },
  "curveto" : { "tk": 0x01, "name":  "CURVETO", "cls": "function", "length": 7 },
  "arcto" : { "tk": 0x01, "name": "ARCTO", "cls": "function", "length": 5 },
  "arc" : { "tk": 0x01, "name": "ARC", "cls": "function", "length": 4 },


  "translate" : { "tk": 0x01, "name": "TRANSLATE", "cls": "function", "length": 3 },
  "scale" : { "tk": 0x01, "name": "SCALE", "cls": "function", "length": 2 },
  "rotate" : { "tk": 0x01, "name": "ROTATE", "cls": "function", "length": 2 },
  "skewx" : { "tk": 0x01, "name": "SKEWX", "cls": "function", "length": 2 },
  "skewy" : { "tk": 0x01, "name": "SKEWY", "cls": "function", "length": 2 },
  "rgb" : { "tk": 0x01, "name": "RGB", "cls": "function", "length": 3 },
  "rgba" : { "tk": 0x01, "name": "RGBA", "cls": "function", "length": 4 },
  "fill" : { "tk": 0x01, "name": "FILL", "cls": "function", "length": 2 },
  "clip" : { "tk": 0x01, "name": "CLIP", "cls": "function", "length": 2 },
  "stroke" : { "tk": 0x01, "name": "STROKE", "cls": "function", "length": 2 },
  "stroke-width" : { "tk": 0x01, "name": "STROKEWIDTH", "cls": "function", "length": 2 },
  "color" : { "tk": 0x01, "name": "COLOR", "cls": "function", "length": 2 },
  "font-size" : { "tk": 0x01, "name": "FSIZE", "cls": "function", "length": 2 },
  "random" : { "tk": 0x01, "name": "RAND", "cls": "function", "length": 2 },

  "cos" : { "tk": 0x01, "name": "COS", "cls": "function", "length": 1 },
  "sin" : { "tk": 0x01, "name": "SIN", "cls": "function", "length": 1 },
  "atan" : { "tk": 0x01, "name": "ATAN", "cls": "function", "length": 1 },


  "pi" : { "tk": 0x01, "name": "PI", "cls": "val", "length": 0,
	         "val": { "tag": "NUM", "elts": [Math.PI] } },

  "true" : { "tk": 0x14, "cls": "val", "length": 0 },
  "false" : { "tk": 0x14, "cls": "val", "length": 0 },

  // TK_BINOP = 0x0E
  "divide" : { "tk": 0x0E, "name": "DIV", "cls": "operator", "length": 0 },
  "div" : { "tk": 0x0E, "name": "DIV", "cls": "operator", "length": 0 },
  "mul" : { "tk": 0x0E, "name": "MUL", "cls": "operator", "length": 0 },
  "times" : { "tk": 0x0E, "name": "MUL", "cls": "operator", "length": 0 },
  "minus" : { "tk": 0x0E, "name": "SUB", "cls": "operator", "length": 0 },
  "sub" : { "tk": 0x0E, "name": "SUB", "cls": "operator", "length": 0 },
  "plus" : { "tk": 0x0E, "name": "ADD", "cls": "operator", "length": 0 },
  "add" : { "tk": 0x0E, "name": "ADD", "cls": "operator", "length": 0 },
  "mod" : { "tk": 0x0E, "name": "MOD", "cls": "operator", "length": 0 },
  "or" : { "tk": 0x0E, "name": "OR", "cls": "operator", "length": 0 },
  "and" : { "tk": 0x0E, "name": "AND", "cls": "operator", "length": 0 },
  "eq" : { "tk": 0x0E, "name": "EQ", "cls": "operator", "length": 0 },
  "ne" : { "tk": 0x0E, "name": "NE", "cls": "operator", "length": 0 },
  "lt" : { "tk": 0x0E, "name": "LT", "cls": "operator", "length": 0 },
  "gt" : { "tk": 0x0E, "name": "GT", "cls": "operator", "length": 0 },
  "le" : { "tk": 0x0E, "name": "LE", "cls": "operator", "length": 0 },
  "ge" : { "tk": 0x0E, "name": "GE", "cls": "operator", "length": 0 },


  "deg" : { "tk": 0x0A, "cls": "operator", "length": 0 }

}
