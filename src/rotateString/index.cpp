#include <vector>
#include <iostream>

using std::cout;
using std::endl;
using std::string;
using std::vector;

class StringUtil
{
public:
  void reverseString(vector<char *> &s)
  {
    int wordSize = s.size();
    int limit = wordSize / 2;
    for (int index = 0; index < limit; index++)
    {
      char *temp = s[index];
      s[index] = s[wordSize - 1 - index];
      s[wordSize - 1 - index] = temp;
    }
  }
};

int main()
{
  vector<char *> vector = {"h", "e", "l", "l", "o"};
  StringUtil stringUtil;
  stringUtil.reverseString(vector);
}