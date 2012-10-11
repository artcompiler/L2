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

~~~
fun fib n = if n is less than two then n else print n. fib n minus one, plus fib 
n minus two.. fun flash lights = blink 100 on off off. blink 100 off on off. 
blink 100 off off on.. fun start = fib ten. flash lights..
~~~

~~~
fun foo n =
    if n is zero then n.
    else print n. foo n minus one.
    .
~~~

NOTE: '.' terminates an expression or phrase. Two consecutive '.' terminates the current function 
definition. ',' terminates a sub-expression, which useful for resolving parsing ambiguities.

## Syntax ##

~~~~
program
    defns
    
defns
    defns defn
    
defn
    'fun' ident pattern '=' expr
    'val' ident '=' expr '.'

expr
    'if' ... 'then' ... 'else' ... '.'
    'if' ... 'then' ... '.'
    callStmt '.'

oper
    'is'
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
    '.'    
~~~~

    