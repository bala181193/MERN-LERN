import SupportCategory from '../models/supportCategory';
import SupportTicket from '../models/supportTicket';

export const updateMany = async (req, res) => {
    const updatedata1 = await SupportTicket.updateOne({ _id: new ObjectId('664758f76892d0e4c3421031') },
        { $set: { status: "closed" } }
    )
    const updatedata2 = await SupportTicket.updateOne({ _id: new ObjectId('664758f76892d0e4c3421031'), 'reply.senderId': new ObjectId('6644683fca2231febc5513a0') },
        { $set: { 'reply.$.image': "ADMIN" } }
    )
    const updatedata3 = await SupportTicket.updateOne({ _id: new ObjectId('664758f76892d0e4c3421031') },
        { $set: { 'reply.$[elm].message': "alert 111111 message" } },
        { arrayFilters: [{ 'elm.messageBy': "CLIENT" }] }
    )
    const updatedata4 = await SupportTicket.updateMany({},
        { $set: { 'reply.$[elm].message': "alert 111111 message" } },
        { arrayFilters: [{ 'elm.messageBy': "CLIENT" }] }
    )
    const updatedata5 = await SupportTicket.updateOne({ _id: new ObjectId('664758f76892d0e4c3421031'), 'reply.senderId': new ObjectId('6644683fca2231febc5513a0') },
        { $set: { 'reply.$[].messageBy': "CLIENT" } }
    )
    const updatedata6 = await SupportTicket.updateMany({},
        { $set: { 'reply.$[].image': "ADMIN" } }
    )
    const updatedata7 = await SupportTicket.updateMany({},
        { $set: { 'status': "ACTIVE" } }
    )

    const updatedata9 = await SupportTicket.updateMany({},
        { $set: { 'status': "ACTIVE" } }
    )
    let result = await SupportTicket.updateOne(
        { _id: new ObjectId('664758f76892d0e4c3421031') },
        { $pull: { reply: { messageBy: "CLIENT" } } }
    );
    console.log('Update result (remove grade):', result);

    console.log(updatedata)
}
