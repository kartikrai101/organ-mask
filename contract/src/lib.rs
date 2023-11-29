use solana_program::{
    account_info::AccountInfo, entrypoint, entrypoint::ProgramResult, msg, pubkey::Pubkey,
};

entrypoint!(process_instruction);

pub struct OrganDonation {
    pub donor_id: String,
    pub hospital_id: Pubkey,
    pub organ_type: String,
    pub organ_name: String,
}

fn process_instruction(
    program_id: &Pubkey,
    _accounts: &[AccountInfo],
    _instruction_data: &[u8],
) -> ProgramResult {
    msg!("Hello, world!");

    // log to blockchain
    let organ_donation = OrganDonation {
        donor_id: "123".to_string(),
        hospital_id: Pubkey::new(&[0; 32]),
        organ_type: "heart".to_string(),
        organ_name: "heart".to_string(),
    };

    msg!("Donor ID: {}", organ_donation.donor_id);
    msg!("Hospital ID: {}", organ_donation.hospital_id);
    msg!("Organ Type: {}", organ_donation.organ_type);
    msg!("Organ Name: {}", organ_donation.organ_name);

    Ok(())
}
