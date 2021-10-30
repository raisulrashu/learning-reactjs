Follow: https://www.youtube.com/watch?v=ISeXMoEcG8Q
https://www.youtube.com/watch?v=lV5mrUYsucU

Check if you have a SSH key by typing "ssh -v git@github.com".
If -1 comes up, then it means you don't have SSH key in setup.
To generate SSH key type in "ssh-keygen -t rsa -b 4096 -C your-email"
Enter file in which to save the key (C:\Users\user-name/.ssh/id_rsa): (Enter to keep as default).
Enter passphrase (empty for no passphrase): Make it Password protected.
Your identification has been saved in C:\Users\user-name/.ssh/id_rsa.
Your public key has been saved in C:\Users\user-name/.ssh/id_rsa.pub.
Now go to your gitHub acc's setting and SSH tab and check the key with newly generated key.
Go to "C:\Users\user-name/.ssh" and open id_rsa.pub file with Notepad++.
Copy the key and now go to your gitHub acc's setting and SSH tab and select "New SSH Key" button, paste the key and give it a name and Save it.

Now type "git clone git@github.com:...." it will be cloned on your local machine.
