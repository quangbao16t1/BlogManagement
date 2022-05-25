const Message = {};

Message.create = 'CREATE SUCCESSFULLY';
Message.update = 'UPDATE SUCCESSFULLY';
Message.delete = "DELETE SUCCESSFULLY";

Message.unCreate = "Can't create!!!"
Message.unUpdate = "Can't update!!!"
Message.unDelete = "Can't delete!!!"

Message.notFound = (message) => {return `${message} NOT FOUND!!!`};
Message.loginValid = 'Email or password is incorrect';

export default Message;