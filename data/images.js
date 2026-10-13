// Placeholder photography from Unsplash.
// Swap any entry for your own photo path (e.g. "/images/office.jpg") later.

const base = "https://images.unsplash.com/";

// Builds an optimised Unsplash URL at a given width.
function unsplash(id, width = 1200) {
  return `${base}${id}?auto=format&fit=crop&w=${width}&q=75`;
}

export const images = {
  heroTeam: unsplash("photo-1522071820081-009f0129c71c", 1200),
  aboutOffice: unsplash("photo-1497366216548-37526070297c", 1200),
  classroom: unsplash("photo-1524178232363-1fb2b075b655", 1200),
  laptopCode: unsplash("photo-1517694712202-14dd9538aa97", 1200),
  teamMeeting: unsplash("photo-1531482615713-2afd69097998", 1200),
  boardroom: unsplash("photo-1517245386807-bb43f82c33c4", 1200),
  workshop: unsplash("photo-1552664730-d307ca884978", 1200),
  presentation: unsplash("photo-1515187029135-18ee286d815b", 1200),
  discussion: unsplash("photo-1542744173-8e7e53415bb0", 1200),
  students: unsplash("photo-1523240795612-9a054b0db644", 1200),
  deskWork: unsplash("photo-1556761175-5973dc0f32e7", 1200),
};

// Square portraits used for testimonials and success stories
export const portraits = {
  p1: unsplash("photo-1507003211169-0a1dd7228f2d", 160),
  p2: unsplash("photo-1494790108377-be9c29b29330", 160),
  p3: unsplash("photo-1500648767791-00dcc994a43e", 160),
  p4: unsplash("photo-1438761681033-6461ffad8d80", 160),
  p5: unsplash("photo-1472099645785-5658abf4ff4e", 160),
  p6: unsplash("photo-1534528741775-53994a69daeb", 160),
};
