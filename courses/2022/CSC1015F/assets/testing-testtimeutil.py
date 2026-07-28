import doctest

# Tests for timeutil using statement coverage
# Alexander Cristaudo
# 08 April 2022
# CRSALE010


def test_validate():
    """
    >>> import timeutil

    Test for if colon<1:
    >>> timeutil.validate(":00 a.m.")
    False

    Test for if colon >= 1, if len(hours)>2 or len(hours)<1 or not hours.isdigit():
    >>> timeutil.validate("011:30 a.m.")
    False

    Test for if colon >= 1, if len(hours)==2 and int(hours[0])==0: 
    >>> timeutil.validate("05:43 a.m.")
    False

    Test for if colon >= 1, if not suffix==' a.m.' and not suffix==' p.m.': 
    >>> timeutil.validate("11:22 n.m.")
    False

    Test for if colon >= 1, if not len(minutes)==2 or not minutes.isdigit(): 
    >>> timeutil.validate("11:204 a.m.")
    False

    Test for pass
    >>> timeutil.validate("11:22 a.m.")
    True

    """


doctest.testmod(verbose=True)
