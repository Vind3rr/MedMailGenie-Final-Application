// ==========================================
// MedMail Genie
// Chrome Extension Prototype v2
// ==========================================
//
// Prototype v2 introduces:
//
// - Multiple synthetic emails
// - Email selection
// - Dynamic email information
// - Dynamic category classification
// - Dynamic priority
// - Dynamic summaries
// - Dynamic suggested replies
// - Regenerate
// - Human approval
// - Manual editing
// - Prototype voice controls
//
// IMPORTANT:
//
// The analysis in this prototype is simulated.
//
// The categories, priorities, summaries and
// replies are predefined inside mockEmails.js.
//
// A real AI model will be integrated later.
// ==========================================


document.addEventListener(
    "DOMContentLoaded",
    function () {


        console.log(
            "MedMail Genie Prototype v2 loading..."
        );


        // ======================================
        // Get General UI Elements
        // ======================================

        const settingsButton =
            document.getElementById(
                "settingsButton"
            );


        const notification =
            document.getElementById(
                "notification"
            );



        // ======================================
        // Get Prototype Inbox Elements
        // ======================================

        const emailSelector =
            document.getElementById(
                "emailSelector"
            );


        const selectedSender =
            document.getElementById(
                "selectedSender"
            );


        const selectedSenderRole =
            document.getElementById(
                "selectedSenderRole"
            );


        const selectedEmailTime =
            document.getElementById(
                "selectedEmailTime"
            );


        const selectedSubject =
            document.getElementById(
                "selectedSubject"
            );


        const selectedEmailBody =
            document.getElementById(
                "selectedEmailBody"
            );



        // ======================================
        // Get Inbox Insight Elements
        // ======================================

        const totalEmails =
            document.getElementById(
                "totalEmails"
            );


        const priorityEmails =
            document.getElementById(
                "priorityEmails"
            );


        const unreadEmails =
            document.getElementById(
                "unreadEmails"
            );


        const topPriorityTime =
            document.getElementById(
                "topPriorityTime"
            );


        const topPrioritySubject =
            document.getElementById(
                "topPrioritySubject"
            );


        const topPriorityDescription =
            document.getElementById(
                "topPriorityDescription"
            );



        // ======================================
        // Get AI Analysis Elements
        // ======================================

        const emailCategory =
            document.getElementById(
                "emailCategory"
            );


        const emailPriority =
            document.getElementById(
                "emailPriority"
            );


        const emailSummary =
            document.getElementById(
                "emailSummary"
            );



        // ======================================
        // Get Draft Elements
        // ======================================

        const draftReply =
            document.getElementById(
                "draftReply"
            );


        const regenerateButton =
            document.getElementById(
                "regenerateButton"
            );


        const approveButton =
            document.getElementById(
                "approveButton"
            );


        const draftStatus =
            document.getElementById(
                "draftStatus"
            );


        const reviewMessage =
            document.getElementById(
                "reviewMessage"
            );



        // ======================================
        // Get Voice Elements
        // ======================================

        const listenButton =
            document.getElementById(
                "listenButton"
            );


        const readButton =
            document.getElementById(
                "readButton"
            );


        const voiceStatus =
            document.getElementById(
                "voiceStatus"
            );



        // ======================================
        // Validate Synthetic Dataset
        // ======================================

        if (
            typeof mockEmails === "undefined"
        ) {

            console.error(
                "MedMail Genie could not find mockEmails."
            );

            return;

        }


        if (
            mockEmails.length === 0
        ) {

            console.error(
                "MedMail Genie synthetic inbox is empty."
            );

            return;

        }



        // ======================================
        // Application State
        // ======================================

        let selectedEmailIndex = 0;

        let currentReplyIndex = 0;

        let isListening = false;

        let notificationTimer;



        // ======================================
        // Notification Function
        // ======================================

        function showNotification(
            message
        ) {

            clearTimeout(
                notificationTimer
            );


            notification.textContent =
                message;


            notification.classList.add(
                "show"
            );


            notificationTimer =
                setTimeout(
                    function () {

                        notification
                            .classList
                            .remove(
                                "show"
                            );

                    },
                    3000
                );

        }



        // ======================================
        // Reset Approval State
        // ======================================

        function resetApproval() {

            approveButton.textContent =
                "✓ Approve";


            approveButton.disabled =
                false;


            draftStatus.textContent =
                "AI Generated";


            draftStatus.classList.remove(
                "approved"
            );


            reviewMessage.textContent =
                "Review and edit AI-generated content before approval.";

        }



        // ======================================
        // Calculate Inbox Statistics
        // ======================================

        function updateInboxInsights() {

            // Total synthetic emails.
            totalEmails.textContent =
                mockEmails.length;


            // Count HIGH priority emails.
            const highPriorityEmails =
                mockEmails.filter(
                    function (email) {

                        return (
                            email.priority ===
                            "HIGH"
                        );

                    }
                );


            priorityEmails.textContent =
                highPriorityEmails.length;


            // Count unread emails.
            const unreadEmailList =
                mockEmails.filter(
                    function (email) {

                        return (
                            email.unread ===
                            true
                        );

                    }
                );


            unreadEmails.textContent =
                unreadEmailList.length;


            // ----------------------------------
            // Top Priority Email
            // ----------------------------------

            if (
                highPriorityEmails.length > 0
            ) {

                const topEmail =
                    highPriorityEmails[0];


                topPriorityTime.textContent =
                    topEmail.time;


                topPrioritySubject.textContent =
                    topEmail.subject;


                topPriorityDescription.textContent =
                    topEmail.summary;

            }

        }



        // ======================================
        // Populate Email Dropdown
        // ======================================

        function populateEmailSelector() {

            emailSelector.innerHTML = "";


            mockEmails.forEach(
                function (
                    email,
                    index
                ) {

                    const option =
                        document.createElement(
                            "option"
                        );


                    option.value =
                        index;


                    // Add unread marker.
                    const unreadMarker =
                        email.unread
                            ? "● "
                            : "";


                    option.textContent =
                        unreadMarker +
                        email.subject;


                    emailSelector.appendChild(
                        option
                    );

                }
            );

        }



        // ======================================
        // Update Priority Styling
        // ======================================

        function updatePriorityStyle(
            priority
        ) {

            emailPriority.classList.remove(
                "priority-high",
                "priority-medium",
                "priority-low"
            );


            if (
                priority === "HIGH"
            ) {

                emailPriority.classList.add(
                    "priority-high"
                );

            }


            else if (
                priority === "MEDIUM"
            ) {

                emailPriority.classList.add(
                    "priority-medium"
                );

            }


            else {

                emailPriority.classList.add(
                    "priority-low"
                );

            }

        }



        // ======================================
        // Display Selected Email
        // ======================================

        function displayEmail(
            index
        ) {

            selectedEmailIndex =
                index;


            currentReplyIndex =
                0;


            const email =
                mockEmails[
                    selectedEmailIndex
                ];



            // ----------------------------------
            // Email Information
            // ----------------------------------

            selectedSender.textContent =
                email.sender;


            selectedSenderRole.textContent =
                email.senderRole;


            selectedEmailTime.textContent =
                email.time;


            selectedSubject.textContent =
                email.subject;


            selectedEmailBody.textContent =
                email.body;



            // ----------------------------------
            // AI Analysis
            // ----------------------------------

            emailCategory.textContent =
                email.category;


            emailPriority.textContent =
                email.priority;


            emailSummary.textContent =
                email.summary;


            updatePriorityStyle(
                email.priority
            );



            // ----------------------------------
            // Draft Reply
            // ----------------------------------

            draftReply.value =
                email.draftReplies[
                    currentReplyIndex
                ];


            resetApproval();


            console.log(
                "Selected email:",
                email.subject
            );

        }



        // ======================================
        // Email Selection
        // ======================================

        emailSelector.addEventListener(
            "change",
            function () {

                const newIndex =
                    Number(
                        emailSelector.value
                    );


                displayEmail(
                    newIndex
                );


                showNotification(
                    "Prototype email analysis loaded."
                );

            }
        );



        // ======================================
        // Regenerate Draft
        // ======================================

        regenerateButton.addEventListener(
            "click",
            function () {

                const email =
                    mockEmails[
                        selectedEmailIndex
                    ];


                currentReplyIndex++;


                // Return to the first draft
                // after the last draft.
                if (
                    currentReplyIndex >=
                    email.draftReplies.length
                ) {

                    currentReplyIndex =
                        0;

                }


                draftReply.value =
                    email.draftReplies[
                        currentReplyIndex
                    ];


                // New draft must be reviewed.
                resetApproval();


                showNotification(
                    "A new prototype draft has been generated."
                );


                console.log(
                    "Draft regenerated for:",
                    email.subject
                );

            }
        );



        // ======================================
        // Approve Draft
        // ======================================

        approveButton.addEventListener(
            "click",
            function () {

                approveButton.textContent =
                    "✓ Approved";


                approveButton.disabled =
                    true;


                draftStatus.textContent =
                    "Approved";


                draftStatus.classList.add(
                    "approved"
                );


                reviewMessage.textContent =
                    "Draft approved by the user.";


                showNotification(
                    "Draft approved. No email has been sent."
                );


                console.log(
                    "Draft approved by user."
                );

            }
        );



        // ======================================
        // Manual Draft Editing
        // ======================================

        draftReply.addEventListener(
            "input",
            function () {

                // Any manual change requires
                // another approval.
                resetApproval();

            }
        );



        // ======================================
        // Settings Prototype
        // ======================================

        settingsButton.addEventListener(
            "click",
            function () {

                showNotification(
                    "Settings will be added in a future prototype."
                );


                console.log(
                    "Settings selected."
                );

            }
        );



        // ======================================
        // Start / Stop Listening
        // ======================================

        listenButton.addEventListener(
            "click",
            function () {

                isListening =
                    !isListening;


                if (
                    isListening
                ) {

                    listenButton.textContent =
                        "⏹ Stop Listening";


                    listenButton.classList.add(
                        "listening"
                    );


                    voiceStatus.textContent =
                        "Listening...";


                    showNotification(
                        "Prototype voice listening started."
                    );

                }


                else {

                    listenButton.textContent =
                        "🎙 Start Listening";


                    listenButton.classList.remove(
                        "listening"
                    );


                    voiceStatus.textContent =
                        "Voice assistant ready";


                    showNotification(
                        "Prototype voice listening stopped."
                    );

                }

            }
        );



        // ======================================
        // Read Reply Prototype
        // ======================================

        readButton.addEventListener(
            "click",
            function () {

                voiceStatus.textContent =
                    "Read Reply selected";


                showNotification(
                    "Text-to-speech will be connected in a future prototype."
                );


                console.log(
                    "Read Reply selected."
                );

            }
        );



        // ======================================
        // Initialise MedMail Genie
        // ======================================

        populateEmailSelector();


        updateInboxInsights();


        displayEmail(
            0
        );


        emailSelector.value =
            "0";


        console.log(
            "MedMail Genie Prototype v2 initialised successfully."
        );

    }
);