# 🤖 SahaayAI – A Friend That Speaks, Sees, and Signs
## Github repo : (https://github.com/harshitgour1/Bit-Rebels.git)
# Drive link : https://drive.google.com/drive/folders/1K3GQ0AmmxLmvteqeVRBhrgTEN9dl1u3m?usp=sharing

SahaayAI (from Sanskrit "Sahāya" meaning 'companion' or 'helper') is an AI-powered accessibility assistant built to empower individuals who are Deaf, Hard of Hearing, Visually Impaired, or Speech-Impaired. It brings together cutting-edge language models, computer vision, and assistive technologies into one inclusive experience.

>  A Friend That Speaks, Sees, and Signs

---

## 🌟 Features

### 🖐️ Sign2Speak
Real-time Sign Language Recognition  
➡️ Uses computer vision and MediaPipe to recognize ASL signs  
➡️ Converts them into spoken words and readable text  
➡️ Empowers Deaf/Hard of Hearing individuals in voice-based environments

### 💬 TalkBuddy
Text-to-Speech Assistant  
➡️ Type what you want to say  
➡️ Generates human-like speech using Google TTS or pyttsx3  
➡️ Ideal for speech-impaired individuals

### 🖼️ SeeForMe
AI-Powered Visual Understanding  
➡️ Upload or capture an image  
➡️ Describes the scene using OpenAI GPT-4o & BLIP  
➡️ Text-to-Speech reads it aloud for the visually impaired

### 🧭 AccessAware Navigation (Coming Soon)  
Context-aware DLIT assistant to help users navigate spaces based on their unique needs

---
!![image](https://github.com/user-attachments/assets/8241082d-59d0-4103-925e-150e7dfcd2fe)

Workflows

## Feature Workflow
### 🖐️ *Sign2Speak* – Real-Time ASL Recognition

1. *Input:* User performs ASL gestures via webcam.
2. *Recognition:* *MediaPipe* tracks hand gestures in real-time.
3. *Conversion:* Gestures are mapped to ASL signs and converted to text.
4. *Output:* Text is converted to speech using *Google TTS* or *pyttsx3*.

*Technologies:* MediaPipe, Google TTS/pyttsx3, FastAPI

![image](https://github.com/user-attachments/assets/239172ab-ef65-477d-8abb-7fe866ab5c08)

---

### 💬 *TalkBuddy* – Text-to-Speech Assistant

1. *Input:* User types text.
2. *Conversion:* Text is converted to speech by *Google TTS* or *pyttsx3*.
3. *Output:* Speech is played aloud for the user.

*Technologies:* Google TTS/pyttsx3, React.js, FastAPI

---

### 🖼️ *SeeForMe* – Visual Understanding for the Blind

1. *Input:* User uploads or captures an image.
2. *Processing:* *BLIP* generates a descriptive caption of the image.
3. *Output:* Caption is read aloud using *Google TTS* or *pyttsx3*.

*Technologies:* BLIP, Google TTS/pyttsx3, FastAPI

---

##  System Architecture

1. *Frontend (React.js):* Handles user input (e.g., text, images) and displays results.
2. *Backend (FastAPI):* Manages requests and processes data (e.g., sign recognition, image captioning).
3. *AI Models:* Use MediaPipe for ASL recognition and BLIP for image understanding.
4. *TTS Engine:* Converts text into speech.

---

## 💡 Why sahaayAI?

Millions live with communication barriers every day. sahaayAI is designed to serve as:

- 🗣 A voice for the speech-impaired  
- 👀 Eyes for the blind  
- 👂 Understanding for the Deaf  

No more exclusion. Just accessible, adaptive, human-centered AI.

---
## 🧭 SahaayAI – User Flow Diagram

- 🏠 Landing Page  
  - 🔽 Feature Selection  
    - 🔹 Sign2Speak (🧏)
      - 📷 Activate webcam for live ASL input  
      - 📝 Display recognized signs as text  
      - 🔊 Convert recognized text into speech  
    - 🔹 TalkBuddy (🗣️)
      - ⌨️ User types a message  
      - 🔊 Output spoken voice using TTS  
    - 🔹 SeeForMe (🖼️)
      - 📤 Upload or capture an image  
      - 🧠 AI generates a description  
        - 📝 Display text caption  
        - 🔊 Read aloud via TTS  

  - ⚙️ Accessibility Settings  
    - Toggle options:
      - Font Size  
      - High Contrast Mode  
      - Keyboard-Only Navigation  
      - Voice Output Options  

  - ℹ️ About / Team / Help

## 🛠️ Tech Stack

| Layer        | Technologies                                                  |
|--------------|---------------------------------------------------------------|
| Frontend     | React.js, TailwindCSS, Axios                                  |
| Backend      | FastAPI (Python), Uvicorn, DLIT Model                         |
| AI Models    | OpenAI GPT-4o, BLIP (Image Captioning), MediaPipe for ASL     |
| TTS Engine   | Google Text-to-Speech, pyttsx3                                |
| Prototyping  | Streamlit (used for rapid UI/testing during development)      |

---

## ⚙️ Installation & Setup

### 📁 Clone the Repo

```bash
git clone https://github.com/your-username/sahaayAI.git
cd sahaayAI
```
## Demo On Drive

📂 **Full Demo Files & Screenshots:**  
[View on Google Drive](https://drive.google.com/drive/folders/1K3GQ0AmmxLmvteqeVRBhrgTEN9dl1u3m?usp=sharing)
