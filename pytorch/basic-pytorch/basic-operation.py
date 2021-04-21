import torch

torch.Size([10])

a = torch.tensor([1.,2.,3.])
b = torch.tensor([4.,5.,6.])



print(a + b)

torch.add(a, b)
a = a.mul(b)
a = a + b
print(a)

a.dot(b)

a = torch.tensor([[0,2,3],[1,2,5]])
b = torch.tensor([[6,7],[8,9],[10,11]])

torch.mm(a,b)
a @ b

x = torch.tensor([2.,3.,4.,5.])
x.norm()
x.numel()

len(x)