---
title: Truth Tables Exercise 2.5
type: lecture
status: needs-review
source: onedrive
assets: [Truth-Tables-Exercise-2.5.docx]
---
> [!warning]
> Converted from .docx with 2 warning(s) — check tables and equations. Original attached.

**P**

**Q**

**R**

Q ⇒R

P ∨ ( Q ⇒R)

T

T

T

T

**T**

T

T

F

F

**T**

T

F

T

T

**T**

T

F

F

T

**T**

F

T

T

T

**T**

F

T

F

F

**F**

F

F

T

T

**T**

F

F

F

T

**T**

**P**

**Q**

**R**

T

T

T

T

T

F

T

F

T

T

F

F

F

T

T

F

T

F

F

F

T

F

F

F

1

2

**P**

**Q**

**R**

Q ∨ R

R ∧ Q

(Q ∨ R) (R ∧ Q)

T

T

T

T

T

**T**

T

T

F

T

F

**F**

T

F

T

T

F

**F**

T

F

F

F

F

**T**

F

T

T

T

T

**T**

F

T

F

T

F

**F**

F

F

T

T

F

**F**

F

F

F

F

F

**T**

3

**P**

**Q**

(P⇒Q)

~(P⇒Q)

T

T

T

**F**

T

F

F

**T**

F

T

T

**F**

F

F

T

**F**

4

**P**

**Q**

**R**

P ∨ Q

~P

~( P ∨ Q)

~( P ∨ Q) ∨ (~P)

T

T

T

T

F

F

**F**

T

T

F

T

F

F

**F**

T

F

T

T

F

F

**F**

T

F

F

T

F

F

**F**

F

T

T

T

T

F

**T**

F

T

F

T

T

F

**T**

F

F

T

F

T

T

**T**

F

F

F

F

T

T

**T**

Alternatively: use De Morgans Law

~(P ∨ Q) = (~P) ∧ (~Q) \[skips P ∨ Q\]

5

**P**

**Q**

~P

P ∧ (~P)

(P ∧ (~P)) ∨ Q

T

T

F

F

**T**

T

F

F

F

**F**

F

T

T

F

**T**

F

F

T

F

**F**

Can skip ~P and do in one step

Alternatively: P ∧ (~P) = F (P and not P is never true since P and ~P are always opposite in value)

So (P ∧ (~P)) ∨ Q = Q

6

**P**

**Q**

~P

P ∧ (~P)

P ∧ (~P) ∧ Q

T

T

F

F

**F**

T

F

F

F

**F**

F

T

T

F

**F**

F

F

T

F

**F**

Alternatively: P ∧ (~P) = F (P and not P is never true since P and ~P are always opposite in value)

So (P ∧ (~P)) ∧ Q = F since (P ∧ (~P)) is always false

7

**P**

**Q**

~P

P ∧ (~P)

(P∧∼P)⇒Q

T

T

F

F

**T**

T

F

F

F

**T**

F

T

T

F

**T**

F

F

T

F

**T**

Alternatively: P ∧ (~P) = F (P and not P is never true since P and ~P are always opposite in value)

So (P ∧ (~P)) ⇒ Q is always true

8

**P**

**Q**

**R**

~R

Q∧∼R

P ∨ (Q∧∼R)

T

T

T

F

F

**T**

T

T

F

T

T

**T**

T

F

T

F

F

**T**

T

F

F

T

F

**T**

F

T

T

F

F

**F**

F

T

F

T

T

**T**

F

F

T

F

F

**F**

F

F

F

T

F

**F**

9

**P**

**Q**

~P

~Q

~P ∨ ~Q

~(~P ∨ ~Q)

T

T

F

F

F

**T**

T

F

F

T

T

**F**

F

T

T

F

T

**F**

F

F

T

T

T

**F**

Alternatively, by De Morgans Law:

(~P ∨ ~Q) = ~(P∧Q)

⇒ ~(~P ∨ ~Q) = ~(~(P∧Q)) = P∧Q

**P**

**Q**

P∧Q

T

T

T

T

F

F

F

T

F

F

F

F

10

If ((P ∧ Q) ∨ R) ⇒ (R ∨ S) is false, then ((P ∧ Q) ∨ R) = T and (R ∨ S) = F

R ∨ S = F means both R and S are false (otherwise R ∨ S = T if either R or S are true)

((P ∧ Q) ∨ R) = T means at least one of (P ∧ Q) and R are true, but R is false so (P ∧ Q) = T

Therefore P = T and Q = T (if either was false then P ∧ Q is false)

P = True

Q = True

R = False

S = False

11

(R ⇒ S) ⇔ (P ∧ Q) is true with P false

Since P is false, (P ∧ Q) is false \[both P and Q have to be true for P ∧ Q to be true\]

Since (R ⇒ S) ⇔ (P ∧ Q) is true, R ⇒ S must be false

The only way for R ⇒ S to be false is for R to be true and S false

**R = True**

**S = False**
