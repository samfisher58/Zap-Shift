import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';

const SendParcel = () => {
    const {register,handleSubmit, control ,formState:{ errors }}= useForm();
    const serviceCenter = useLoaderData();
    const regionDuplicate = serviceCenter.map(c=>c.region)
    console.log(regionDuplicate);
    const region = [...new Set(regionDuplicate)];
    const senderRegion = useWatch({control, name:'senderRegion'});
    const receiverRegion = useWatch({ control, name: "receiverRegion" });

    const districtByRegion = region =>{
        const regionDistrict = serviceCenter.filter(c=>c.region === region )
        const districts = regionDistrict.map(d=>d.district);
        return districts;
    }
    console.log(region);

    const handleSendParcel=(data)=>{
        console.log(data);
    }


	return (
		<div>
			<h2 className="text-5xl font-bold">Send A Parcel</h2>
			<p className="font-semibold my-2">Enter Your Parcel details</p>
			<form
				onSubmit={handleSubmit(handleSendParcel)}
				className="mt-12 p-4 text-black"
			>
				{/* {Parcel type} */}
				<div>
					<label className="label mr-5">
						<input
							type="radio"
							{...register('parcelType')}
							value="document"
							className="radio radio-success"
							defaultChecked
						/>
						Document
					</label>
					<label className="label">
						<input
							type="radio"
							{...register('parcelType')}
							value="non-document"
							className="radio radio-success"
							defaultChecked
						/>
						Non-Document
					</label>
				</div>
				{/* {/parcel info} */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
					<fieldset className="fieldset">
						<label className="label">Parcel Name</label>
						<input
							type="text"
							{...register('parcelName')}
							className="input w-full"
							placeholder="Parcel Name"
						/>
					</fieldset>
					<fieldset className="fieldset">
						<label className="label">Parcel Weight</label>
						<input
							type="number"
							{...register('parcelWeight')}
							className="input w-full"
							placeholder="Parcel Weight"
						/>
					</fieldset>
				</div>
				{/* two column */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					{/* sender info */}
					<div>
						<h4 className="text-2xl font-semibold">Sender Details</h4>
						<fieldset className="fieldset">
							{/* {sender Name} */}
							<label className="label">Sender Name</label>
							<input
								type="text"
								{...register('senderName')}
								className="input"
								placeholder="Sender Name"
							/>
							{/* {sender Email} */}
							<label className="label">Sender Email</label>
							<input
								type="email"
								{...register('senderEmail')}
								className="input"
								placeholder="Sender Email"
							/>
							{/* Sender Region */}
							<fieldset className="fieldset">
								<legend className="fieldset-legend">Sender Regions</legend>
								<select
									{...register('senderRegion')}
									defaultValue="Pick a Region"
									className="select"
								>
									<option disabled={true}>Pick a Region</option>
									{region.map((r, i) => (
										<option key={i} value={r}>
											{r}
										</option>
									))}
								</select>
							</fieldset>

							{/* Sender Districts */}
							<fieldset className="fieldset">
								<legend className="fieldset-legend">Sender Districts</legend>
								<select
									{...register('senderDistricts')}
									defaultValue="Pick a Districts"
									className="select"
								>
									<option disabled={true}>Pick a Districts</option>
									{districtByRegion(senderRegion).map((r, i) => (
										<option key={i} value={r}>
											{r}
										</option>
									))}
								</select>
							</fieldset>

							{/* {SenderPhoneNumber} */}
							<label className="label">Sender Phone No</label>
							<input
								type="number"
								{...register('senderPhoneNo')}
								className="input"
								placeholder="Sender Phone No"
							/>

							{/* {Pickup Instruction} */}
							<label className="label">Pickup Instruction</label>
							<textarea
								{...register('senderInstruction')}
								className="input"
								placeholder="Pickup Instruction"
								row={4}
							/>
						</fieldset>
					</div>
					{/* receiver info */}
					<div>
						<h4 className="text-2xl font-semibold">Receiver Details</h4>
						<fieldset className="fieldset">
							{/* {Receiver Name} */}
							<label className="label">Receiver Name</label>
							<input
								type="text"
								{...register('receiverName')}
								className="input"
								placeholder="Receiver Name"
							/>
							{/* {Receiver Email} */}
							<label className="label">Receiver Email</label>
							<input
								type="email"
								{...register('receiverEmail')}
								className="input"
								placeholder="Receiver Email"
							/>
							{/* Receiver Region */}
							<fieldset className="fieldset">
								<legend className="fieldset-legend">Receiver Regions</legend>
								<select
									{...register('receiverRegion')}
									defaultValue="Pick a Region"
									className="select"
								>
									<option disabled={true}>Pick a Region</option>
									{region.map((r, i) => (
										<option key={i} value={r}>
											{r}
										</option>
									))}
								</select>
							</fieldset>

							{/* receiver Districts */}
							<fieldset className="fieldset">
								<legend className="fieldset-legend">Receiver Districts</legend>
								<select
									{...register('ReceiverDistricts')}
									defaultValue="Pick a Districts"
									className="select"
								>
									<option disabled={true}>Pick a Districts</option>
									{districtByRegion(receiverRegion).map((r, i) => (
										<option key={i} value={r}>
											{r}
										</option>
									))}
								</select>
							</fieldset>

							{/* {Receiver PhoneNumber} */}
							<label className="label">Receiver Phone No</label>
							<input
								type="number"
								{...register('receiverPhoneNo')}
								className="input"
								placeholder="Receiver Phone No"
							/>

							{/* {Pickup Instruction} */}
							<label className="label">Delivery Instruction</label>
							<textarea
								{...register('receiverInstruction')}
								className="input"
								placeholder="Pickup Instruction"
								row={4}
							/>
						</fieldset>
					</div>
				</div>
				<input
					type="submit"
					className=" btn btn-primary text-black mt-4"
					value="Send parcel"
				/>
			</form>
		</div>
	);
};

export default SendParcel;
