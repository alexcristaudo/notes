def increment(n):
    return n+1
def decrement(n):
    return n-1

def funcVal(func, n):
    return eval(func.replace("x", str(n)))