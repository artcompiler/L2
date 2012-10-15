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
let countDown n =
    if n equal zero then n.
    else begin print n. foo n minus one end..
~~~

~~~
let dance n = if n is zero then n else begin forward two seconds. spin right ninety degrees.
    backward two seconds. spin right ninety degrees. forward two seconds. spin left
    ninety degrees. forward two seconds. spin left ninety degrees. dance n minus one end..

let flash lights = blink 100 on off off. blink 100 off on off. blink 100 off off on..

let start = dance ten. flash lights..
~~~

NOTE: '.' terminates an expression. ',' terminates a sub-expression, which useful for resolving
parsing ambiguities. Two consecutive '.' terminates the current function definition.

## Syntax ##

~~~~

program
    defns

defns
    defn
    defns defn

defn
    'let' ident pattern '=' expr '.' '.'
    'let' ident '=' expr '.' '.'

pattern
    value
    list
    tuple
    ident
    
expr
    condExpr

condExpr
    orExpr
    'if' expr 'then' expr
    'if' expr 'then' expr 'else' expr
    'match' expr 'with' matches

matches
    match
    matches match

match
    pattern '=' expr

orExpr
    andExpr
    orExpr 'or' andExpr

andExpr
    relationalExpr
    andExpr 'and' isExpr

relationalExpr
    binaryExpr
    isExpr relationalOp binaryExpr

additiveExpr
    multiplicativeExpr
    mutliplicativeExpr additiveOp multiplicativeExpr

multiplicativeExpr
    prefixExpr
    mutlplicativeExpr multiplicativeOp prefixExpr

prefixExpr
    prefixOp postfixExpr

postfixExpr
    callExpr postfixOp

callExpr
    primaryExpr
    ident args

primaryExpr
    num
    ident

beginExpr
    'begin' exprs 'end'

exprs
    expr
    exprs '.' expr

relationalOp
    'equal'
    'less than'
    'greater than'
    'less than or equal'
    'greater than or equal'
    '='
    '<'
    '>'
    '<='
    '>='
~~~~

    