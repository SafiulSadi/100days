import json
with open('data.json', 'r') as data_file:
    x = json.load(data_file)
    print(x)
    website = 'fazebook'    
    # for k,v in x:
    #     print(f"key: {k} Value: {v}")
    print(len(x))
    if website in x.keys():
        print(x[website])
        for i in x[website]:
            print(f"{i}: "+x[website][i])
        
    
    