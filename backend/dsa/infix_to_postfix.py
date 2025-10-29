def infix_to_postfix(infix: str) -> str:
    precedence = {'+': 1, '-': 1, '*': 2, '/': 2, '^': 3}
    associativity = {'+': True, '-': True, '*': True, '/': True, '^': False}
    
    output, stack = [], []
    infix = infix.replace(' ', '')
    
    i = 0
    while i < len(infix):
        char = infix[i]
        
        if char.isalnum():
            operand = char
            j = i + 1
            while j < len(infix) and infix[j].isalnum():
                operand += infix[j]
                j += 1
            output.append(operand)
            i = j
            continue
        
        elif char == '(':
            stack.append(char)
        
        elif char == ')':
            while stack and stack[-1] != '(':
                output.append(stack.pop())
            if stack:
                stack.pop()
        
        elif char in precedence:
            while (stack and stack[-1] != '(' and stack[-1] in precedence and
                   (precedence[stack[-1]] > precedence[char] or
                    (precedence[stack[-1]] == precedence[char] and associativity[char]))):
                output.append(stack.pop())
            stack.append(char)
        
        i += 1
    
    while stack:
        output.append(stack.pop())
    
    return ' '.join(output)


def validate_infix(infix: str) -> tuple[bool, str]:
    if not infix or not infix.strip():
        return False, "Expression cannot be empty"
    
    paren_count = 0
    for char in infix:
        if char == '(':
            paren_count += 1
        elif char == ')':
            paren_count -= 1
        if paren_count < 0:
            return False, "Unbalanced parentheses"
    
    return (True, "") if paren_count == 0 else (False, "Unbalanced parentheses")
