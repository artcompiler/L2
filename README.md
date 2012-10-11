Graffiti Code
=============

Graffiti Code is a syntax light language that borrows from the core semantics of ML. It is intended
for creative coding with a smart editor. The goal is to reduce the development cycle to Edit and Run,
eliminating, as much as possible, the need for debugging beyond simple console logging.

Features include:
- function definitions with overloading
- function invocation with pattern matching
- first class functions
- strong static typing
- type inference
- punctuation light syntax

## Sample Code ##

> def fib n. if n less than two then ret n. print n. fib n minus one plus fib n minus two.

> def start. fib ten.

## Syntax ##

~~~~
program
    defns
    
defns
    defns defn
    
defn
    'def' sig '.' stmts

stmt
    'val' ident 'is' expr '.'
    'if' ... 'then' ... 'else' ... '.'
    'if' ... 'then' ... '.'
    callStmt '.'

oper
    'equal to'
    'less than'
    'greater than'
    'less than or equal to'
    'greater than or equal to'
    '='
    '<'
    '>'
    '<='
    '>='
    
~~~~

    