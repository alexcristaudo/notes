# Path tests for numberutil
# Alexander Cristaudo
# 08 April 2022
# CRSALE010

import doctest

"""
    Tree of possibilities:
          hundreds
         /         \ 
        >0          =0
        |            |
       rem          rem
    /   |  \      /  |  \ 
  0-21 >21 =0  0-21 >21 =0
  (1)   |  (4) (5)   |  (8)
        unit        unit
        /  \        / \ 
    >0   =0       >0  =0
    (2)  (3)      (6) (7)
"""


def test_aswords():
    """
    >>> import numberutil

    Test for (1):
    >>> numberutil.aswords(105)
    'one hundred and five'

    Test for (2):
    >>> numberutil.aswords(144)
    'one hundred and forty four'

    Test for (3):
    >>> numberutil.aswords(140)
    'one hundred and forty'

    Test for (4):
    >>> numberutil.aswords(300)
    'three hundred'

    Test for (5):
    >>> numberutil.aswords(5)
    'five'

    Test for (6):
    >>> numberutil.aswords(44)
    'forty four'

    Test for (7):
    >>> numberutil.aswords(40)
    'forty'

    Test for (8):
    >>> numberutil.aswords(0)
    'zero'

    """


doctest.testmod(verbose=True)
