import codeTest  # The code to test


def test_increment():
    assert codeTest.increment(3) == 4

def test_decrement():
    assert codeTest.decrement(3) == 2

def test_funcVal():
    assert codeTest.funcVal("x**2", 4) == 16