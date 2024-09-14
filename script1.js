// script.js
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// // Get references to the form and display area
// const form = document.getElementById('resume-form') as HTMLFormElement;
// const resumeDisplayElement = document.getElementById('resume-output') as
// HTMLDivElement;
// const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement
// const shareableLinkElement = document.getElementById('shareable-link') as
// HTMLAnchorElement;
// const downloadPdfButton = document.getElementById('download-pdf') as
// HTMLButtonElement;
// // Handle form submission
// form.addEventListener('submit', (event: Event) => {
// event.preventDefault(); // prevent page reload
// // Collect input values
// const username = (document.getElementById('username') as
// HTMLInputElement).value;
// const name = (document.getElementById('name') as HTMLInputElement).value;
// const email = (document.getElementById('email') as HTMLInputElement).value;
// const phone = (document.getElementById('phone') as HTMLInputElement).value;
// const education = (document.getElementById('education') as
// HTMLTextAreaElement).value;
// const experience = (document.getElementById('experience') as
// HTMLTextAreaElement).value;
// const skills = (document.getElementById('skills') as
// HTMLTextAreaElement).value;
// // Save form data in localStorage with the username as the key
// const resumeData = {
// name,
// email,
// phone,
// education,
// experience,
// skills
// };
// localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the
// // data locally
// // Generate the resume content dynamically
// const resumeHTML = `
// <h2>Editable Resume</h2>
// <h3>Personal Information</h3>
// <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
// <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
// <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
// <h3>Education</h3>
// <p contenteditable="true">${education}</p>
// <h3>Experience</h3>
// <p contenteditable="true">${experience}</p>
// <h3>Skills</h3>
// <p contenteditable="true">${skills}</p>
// `;
// // Display the generated resume
// resumeDisplayElement.innerHTML = resumeHTML;
// // Generate a shareable URL with the username only
// const shareableURL =
// `${window.location.origin}?username=${encodeURIComponent(username)}`;
// // Display the shareable link
// shareableLinkContainer.style.display = 'block';
// shareableLinkElement.href = shareableURL;
// shareableLinkElement.textContent = shareableURL;
// });
// // Handle PDF download
// downloadPdfButton.addEventListener('click', () => {
// window.print() as PDF;
// // This will open the print dialog and allow the user to save
// // Prefill the form based on the username in the URL
// window.addEventListener('DOMContentLoaded', () => {
// const urlParams = new URLSearchParams(window.location.search);
// const username = urlParams.get('username');
// if (username) {
// // Autofill form if data is found in localStorage
// const savedResumeData = localStorage.getItem(username);
// if (savedResumeData) {
// const resumeData = JSON.parse(savedResumeData);
// (document.getElementById('username') as HTMLInputElement).value =
// username;
// (document.getElementById('name') as HTMLInputElement).value =
// resumeData.name;
// (document.getElementById('email') as HTMLInputElement).value =
// resumeData.email;
// (document.getElementById('phone') as HTMLInputElement).value =
// resumeData.phone;
// (document.getElementById('education') as HTMLTextAreaElement).value =
// resumeData.education;
// (document.getElementById('experience') as HTMLTextAreaElement).value
// = resumeData.experience;
// (document.getElementById('skills') as HTMLTextAreaElement).value
// resumeData.skills;
// }
// }
// });
// Get references to the form and display area
// const form = document.getElementById('resume-form') as HTMLFormElement;
// const resumeDisplayElement = document.getElementById('resume-output') as HTMLDivElement;
// const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
// const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
// const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;
// // Handle form submission
// form.addEventListener('submit', (event: Event) => {
//     event.preventDefault(); // prevent page reload
//     // Collect input values
//     const username = (document.getElementById('username') as HTMLInputElement).value;
//     const name = (document.getElementById('name') as HTMLInputElement).value;
//     const email = (document.getElementById('email') as HTMLInputElement).value;
//     const phone = (document.getElementById('phone') as HTMLInputElement).value;
//     const education = (document.getElementById('education') as HTMLTextAreaElement).value;
//     const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
//     const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
//     // Save form data in localStorage with the username as the key
//     const resumeData = { name, email, phone, education, experience, skills };
//     localStorage.setItem(username, JSON.stringify(resumeData)); // Save data locally
//     // Generate the resume content dynamically
//     const resumeHTML = `
//         <h2>Editable Resume</h2>
//         <h3>Personal Information</h3>
//         <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
//         <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
//         <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
//         <h3>Education</h3>
//         <p contenteditable="true">${education}</p>
//         <h3>Experience</h3>
//         <p contenteditable="true">${experience}</p>
//         <h3>Skills</h3>
//         <p contenteditable="true">${skills}</p>
//     `;
//     // Display the generated resume
//     resumeDisplayElement.innerHTML = resumeHTML;
//     // Generate a shareable URL with the username
//     if (username.trim()) {
//         const shareableURL = `${window.location.origin}${window.location.pathname}?username=${encodeURIComponent(username)}`;
//         shareableLinkContainer.style.display = 'block';
//         shareableLinkElement.href = shareableURL;
//         shareableLinkElement.textContent = shareableURL;
//     }
// });
// // Handle PDF download
// import { jsPDF } from 'jspdf';
// downloadPdfButton.addEventListener('click', () => {
//     const doc = new jsPDF(); // Create an instance of jsPDF
//     doc.text("Resume", 10, 10); // Add some text to the PDF
//     doc.html(document.getElementById('resume-output') as HTMLElement, {
//         callback: function (doc) {
//             doc.save("resume.pdf"); // Save the PDF
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    var generateBtn = document.getElementById('generate-btn');
    var linkBtn = document.getElementById('link-btn');
    var downloadBtn = document.getElementById('download-btn');
    var resumeOutput = document.getElementById('resume-output');
    // Generate Resume
    generateBtn.addEventListener('click', function () {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        // Display the resume in the output section
        resumeOutput.innerHTML = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
    });
    // Generate Shareable Link
    linkBtn.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
        var name, shareableLink, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = document.getElementById('name').value;
                    shareableLink = "https://example.com/resume/".concat(name.replace(/\s+/g, '_'), "_resume.html");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                case 2:
                    _a.sent();
                    alert('Shareable link copied to clipboard: ' + shareableLink);
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error('Failed to copy link:', err_1);
                    alert('Failed to copy link. Please try again.');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    // linkBtn.addEventListener('click', async () => {
    //     const name = (document.getElementById('name') as HTMLInputElement).value;
    //     // Create a shareable link (in this case, mock a link)
    //     const shareableLink = https://example.com/resume/${name.replace(/\s+/g, '_')}_resume.html;
    //     // Copy the shareable link to the clipboard
    //     try {
    //         await navigator.clipboard.writeText(shareableLink);
    //         alert('Shareable link copied to clipboard: ' + shareableLink);
    //     } catch (err) {
    //         console.error('Failed to copy link:', err);
    //         alert('Failed to copy link. Please try again.');
    //     }
    // });
    // Download Resume
    downloadBtn.addEventListener('click', function () {
        // Use window.print to allow the user to print or save as PDF
        window.print();
    });
});
