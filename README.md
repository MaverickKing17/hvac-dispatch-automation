HVAC AI Dispatch & CRM Automation Suite
Powering 24/7 Lead Generation for Local Service Providers
📌 Project Overview
This repository contains the architecture and logic for a high-performance AI Receptionist specifically tuned for the HVAC industry in the Toronto/GTA market. The system bridges the gap between missed customer calls and booked appointments by using low-latency voice AI integrated directly into a professional CRM.

The Problem: Small to mid-sized HVAC companies lose thousands in revenue every month due to missed after-hours calls or slow lead entry. The Solution: A 24/7 AI Voice Agent that qualifies leads, captures customer intent, and syncs data to a CRM in real-time.

🛠 Tech Stack
Voice Engine: Retell AI (LLM-powered voice processing)

Automation Layer: Zoho Flow (Webhook-based data routing)

Database/CRM: Zoho CRM (Lead management and tracking)

Deployment: Webhook-to-REST API architecture

🧠 Core Logic & Documentation
1. The Retell Agent Prompt ("Alex")
The "brain" of the dispatcher is located in the /prompts folder. It is designed with a "Local First" personality:

Identity: Alex, a professional, helpful dispatcher for Omega Heating and AC.

Objective: Calmly handle emergency furnace/AC calls, gather the Name, Address, and Issue, and reassure the customer that a technician will be notified.

Safety Rails: Does not give pricing; focuses on lead qualification and emergency triage.

2. Zoho Flow Logic (The Bridge)
The automation workflow follows this logic:

Trigger: Webhook Received (JSON payload from Retell).

Filter: Checks for valid end_call signal to ensure the conversation is finished.

Action: Create or Update Lead in Zoho CRM.

Mapping:

Webhook: name → CRM: Last Name

Webhook: address → CRM: Street

Webhook: service_issue → CRM: Description

📈 Business Impact
Zero Missed Leads: 24/7 coverage without the $3,500/mo cost of a live answering service.

Instant CRM Entry: Eliminates manual data entry and human error.

Scalability: This framework is designed to be "templated" and deployed across multiple service territories (North York, Mississauga, Scarborough).

🚀 How to Deploy
Import the agent_config.json into your Retell Dashboard.

Set the Webhook URL in Retell to your Zoho Flow endpoint.

Ensure the "Create Lead" module in Zoho CRM has the custom field Service_Issue mapped correctly.

Test via the Retell Chat sandbox and verify the lead appears in the CRM dashboard.

Developed by [Your Name/Username] – Dedicated to helping local HVAC businesses scale through intelligent automation.
