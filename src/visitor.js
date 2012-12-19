/* -*- mode: javascript; tab-width: 4; indent-tabs-mode: nil -*- */
/* Copyright (c) 2012, Jeff Dyer */

var Visitor = function(table) {

    var table;        // map from tag names to visitor methods
    var pool = { }    // map from node ids to nodes

    function Visitor(table="empty") 
        : table = table { }

    public function visit(node) {

        if (node == null) {
            return
        }

        if (pool[node.id] === void 0) {
            pool[node.id] = node
        }

        if (isString(node)) {
            return node
        }

        if (isPrimitive(node)) {
            return String(node)
        }

        if (isArray(node)) {
            let elts = [ ]
            for (let i = 0; i < node.length; i++) {
                elts.push(visit(node[i]))
            }
            return elts
        }

        if (isObject(node)) {
            //print("visit() node.tag="+node.tag)

            if (node.tag === void 0) {
                return [ ]  // clean up stubs
            }
            else if (isFunction(table[node.tag])) {
                print(node.id)
                return table[node.tag](node)
            }
            else {
                throw "missing visitor method for " + node.tag                
            }
        }

        throw "missing visitor method for " + node
    }

    function isArray(v) {
        return v is Array
    }

    function isObject(v) {
        return v is Object
    }

    function isString(v) {
        return v is String
    }

    function isPrimitive(v) {
        return v === null || v is String || v is Number || v is Boolean
    }

    function isFunction(v) {
        return v is Function
    }

    return {
        visit: visit
    }
}