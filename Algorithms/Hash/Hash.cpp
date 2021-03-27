#include<bits/stdc++.h>
using namespace std;


class Hash
{
	int Bucket;
	list<int> *table;
public: 
	Hash(int V);
	void insertItem(int x);
	void deleteItem(int key);
	int hashFunction(int x){
		return (x % Bucket);
	}
	void displayHash();
};

Hash::Hash(int b)
{
	this->Bucket = b;
	table[index].push_back(key);
}

void Hash::deleteItem(int key){
	int index = hashFunction(key);
	list<int>:: iterator i;
	for(i = table[index].begin();
		i != table[index].end(); i++){

		if( *i == key)
			break;
	}
	if(i != table[index].end())
		table[index].erase(i);
}



