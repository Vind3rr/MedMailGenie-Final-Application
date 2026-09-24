// ==========================================
// MedMail Genie
// Synthetic Email Dataset
// Prototype v2
// ==========================================
//
// IMPORTANT:
// All emails below are completely fictional.
//
// They are used only for development,
// demonstration and evaluation.
//
// They do NOT contain real Sigma Healthcare,
// pharmacy, employee or customer information.
// ==========================================


const mockEmails = [

    // ======================================
    // Email 1
    // Pharmacy / Logistics
    // ======================================

    {
        id: 1,

        sender: "Sarah Mitchell",

        senderRole: "Pharmacy Manager",

        subject: "Urgent: Pharmacy Order Delivery Delay",

        time: "10:42 AM",

        category: "Delivery / Logistics",

        priority: "HIGH",

        unread: true,

        body: `Hi,

Our pharmacy was expecting delivery of order #TEST-48291 this morning, but it has not arrived.

We are currently running low on several items included in the order.

Could you please confirm the current delivery status and provide an updated ETA?

Thanks,
Sarah`,

        summary:
            "The pharmacy is reporting a delayed order and is requesting an updated delivery time because stock levels are running low.",

        draftReplies: [

            `Hi Sarah,

Thank you for contacting us.

We are currently investigating the delayed delivery and will provide an updated estimated delivery time as soon as possible.

Kind regards,
Sigma Healthcare`,

            `Hi Sarah,

Thank you for bringing this to our attention.

Our distribution team is reviewing the status of the delayed order. We will provide you with an updated ETA once further information becomes available.

Kind regards,
Sigma Healthcare`,

            `Hi Sarah,

We apologise for the delay with your pharmacy order.

We are checking the current delivery status and will provide an updated estimated arrival time as soon as possible.

Kind regards,
Sigma Healthcare`

        ]
    },


    // ======================================
    // Email 2
    // Pharmacy / Stock
    // ======================================

    {
        id: 2,

        sender: "Daniel Lee",

        senderRole: "Pharmacist",

        subject: "Stock Availability Request",

        time: "9:15 AM",

        category: "Stock Enquiry",

        priority: "HIGH",

        unread: true,

        body: `Hi,

Could you please confirm whether Product X is currently available?

Our current stock is very low and we expect to require additional units before Friday.

Please let us know the expected availability.

Regards,
Daniel`,

        summary:
            "The pharmacist is requesting confirmation of Product X availability because current stock is low and additional units are required before Friday.",

        draftReplies: [

            `Hi Daniel,

Thank you for your enquiry.

We are checking the current availability of Product X and will provide you with an update regarding stock and expected availability.

Kind regards,
Sigma Healthcare`,

            `Hi Daniel,

Thank you for contacting us.

We are currently reviewing the stock position for Product X and will provide availability information as soon as possible.

Kind regards,
Sigma Healthcare`,

            `Hi Daniel,

We have received your stock availability request.

Our team is checking the current inventory status of Product X and will provide an update shortly.

Kind regards,
Sigma Healthcare`

        ]
    },


    // ======================================
    // Email 3
    // Healthcare Administration
    // ======================================

    {
        id: 3,

        sender: "Emily Roberts",

        senderRole: "Healthcare Administrator",

        subject: "Monthly Operations Meeting",

        time: "Yesterday",

        category: "Administration",

        priority: "LOW",

        unread: false,

        body: `Hi team,

This is a reminder that our monthly operations meeting is scheduled for next Tuesday.

Please send through any agenda items you would like discussed.

Thanks,
Emily`,

        summary:
            "The sender is reminding the team about next Tuesday's monthly operations meeting and requesting agenda items.",

        draftReplies: [

            `Hi Emily,

Thank you for the reminder.

We will review any relevant items and send through proposed agenda topics before the meeting.

Kind regards,
Sigma Healthcare`,

            `Hi Emily,

Thanks for the reminder regarding next Tuesday's operations meeting.

We will provide any proposed agenda items before the meeting.

Kind regards,
Sigma Healthcare`,

            `Hi Emily,

Thank you for the update.

We will review the upcoming meeting agenda and send through any additional discussion items.

Kind regards,
Sigma Healthcare`

        ]
    },


    // ======================================
    // Email 4
    // Distribution / Logistics
    // ======================================

    {
        id: 4,

        sender: "Michael Chen",

        senderRole: "Distribution Coordinator",

        subject: "Updated Delivery Schedule",

        time: "Yesterday",

        category: "Delivery / Logistics",

        priority: "MEDIUM",

        unread: false,

        body: `Hi,

The delivery schedule for tomorrow has been updated due to changes in warehouse processing times.

Please review the revised schedule and let us know if there are any issues.

Regards,
Michael`,

        summary:
            "The distribution coordinator has provided an updated delivery schedule for tomorrow and is asking recipients to report any issues.",

        draftReplies: [

            `Hi Michael,

Thank you for the update.

We will review the revised delivery schedule and contact you if we identify any issues.

Kind regards,
Sigma Healthcare`,

            `Hi Michael,

Thanks for providing the updated schedule.

We will review the changes and let you know if any delivery issues are identified.

Kind regards,
Sigma Healthcare`,

            `Hi Michael,

Thank you for sending through the revised delivery schedule.

Our team will review the updated timings and contact you if any clarification is required.

Kind regards,
Sigma Healthcare`

        ]
    },


    // ======================================
    // Email 5
    // Pharmacy Order
    // ======================================

    {
        id: 5,

        sender: "Olivia Brown",

        senderRole: "Pharmacy Manager",

        subject: "Order Quantity Confirmation",

        time: "Monday",

        category: "Order Enquiry",

        priority: "MEDIUM",

        unread: true,

        body: `Hi,

Could you please confirm the quantity allocated to our upcoming order?

We would like to verify the numbers before the order is processed.

Thanks,
Olivia`,

        summary:
            "The pharmacy manager is requesting confirmation of the quantity allocated to an upcoming order before it is processed.",

        draftReplies: [

            `Hi Olivia,

Thank you for your message.

We will verify the quantity allocated to your upcoming order and provide confirmation shortly.

Kind regards,
Sigma Healthcare`,

            `Hi Olivia,

Thank you for contacting us.

Our team will review the allocated quantities for your upcoming order and provide confirmation once verified.

Kind regards,
Sigma Healthcare`,

            `Hi Olivia,

We have received your request regarding the upcoming order quantity.

We will verify the allocation and provide you with confirmation shortly.

Kind regards,
Sigma Healthcare`

        ]
    },


    // ======================================
    // Email 6
    // Distribution / Warehouse
    // ======================================

    {
        id: 6,

        sender: "James Wilson",

        senderRole: "Warehouse Coordinator",

        subject: "Warehouse Processing Update",

        time: "Monday",

        category: "Warehouse Operations",

        priority: "LOW",

        unread: false,

        body: `Hi team,

Warehouse processing times have returned to normal following this morning's temporary delay.

No further action is required at this stage.

Regards,
James`,

        summary:
            "Warehouse processing has returned to normal following a temporary delay, and no further action is currently required.",

        draftReplies: [

            `Hi James,

Thank you for the update.

We appreciate the confirmation that warehouse processing has returned to normal.

Kind regards,
Sigma Healthcare`,

            `Hi James,

Thanks for letting us know.

We have noted that warehouse processing has returned to normal and that no further action is required.

Kind regards,
Sigma Healthcare`,

            `Hi James,

Thank you for the confirmation.

We have noted the warehouse processing update.

Kind regards,
Sigma Healthcare`

        ]
    }

];