import numpy as np
import torch
import torch.autograd import Variable


x_values = [i for i in range(101)]
x_train = np.array(x_values, dtype=np.float32)
x_train = x_train.reshape(-1,1)


y_values = [2*i + 1 for i in x_values]
print(y_values)
y_train = np.array(y_values, dtype=np.float32)
y_train = y_train.reshape(-1, 1)